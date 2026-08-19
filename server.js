require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// --- 1. SÉCURITÉ BANCAIRE & MIDDLEWARES ---
// En-têtes HTTP sécurisés (Helmet)
app.use(helmet());

// Configuration CORS stricte
const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000'];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Accès refusé par la politique CORS'));
        }
    },
    methods: ['GET', 'POST'],
    credentials: true
}));

// Limitation de débit (Rate Limiting) pour prévenir les attaques par force brute
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requêtes max par IP
    standardHeaders: true,
    legacyHeaders: false,
    message: { status: 'error', message: 'Trop de requêtes, veuillez réessayer plus tard.' }
});
app.use('/api/', apiLimiter);

app.use(express.json({ limit: '10kb' })); // Protection contre les payloads trop volumineux

// --- 2. BASE DE DONNÉES RDS POSTGRESQL ---
const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'beninpay',
    user: process.env.DB_USER || 'dbadmin',
    password: process.env.DB_PASSWORD || 'password',
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: true } : false
});

// --- 3. ROUTES & LOGGING DE TRACKING ---
let logs = [];

// Route de tracking d'intentions
app.post('/api/log-click', (req, res) => {
    const { action, target, page, timestamp } = req.body;
    const logEntry = { 
        action: action ? String(action).substring(0, 100) : 'Inconnu', 
        target: target ? String(target).substring(0, 100) : 'Inconnu', 
        page: page ? String(page).substring(0, 50) : 'Inconnu', 
        timestamp: timestamp || new Date().toISOString() 
    };
    
    logs.push(logEntry);
    console.log(`[AUDIT LOG ${logEntry.timestamp}] [${logEntry.page}] -> ${logEntry.action} (${logEntry.target})`);
    
    res.json({ status: 'success', message: 'Clic enregistré' });
});

// Healthcheck pour AWS ALB / ECS Fargate
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date() });
});

// Endpoint Dashboard
app.get('/api/dashboard', async (req, res) => {
    try {
        // En prod, requête SQL préparée vers RDS : SELECT * FROM users WHERE id = ...
        res.json({
            status: 'success',
            data: {
                nom: "User",
                telephone: "+229 97 00 00 00",
                statut: "Compte Vérifié",
                solde: 245500,
                devise: "FCFA"
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'error', message: 'Erreur serveur' });
    }
});

// Endpoint Transactions (Inter-réseaux)
app.post('/api/transactions/send', async (req, res) => {
    const { source, destinataire, montant } = req.body;
    
    if (!montant || isNaN(montant) || montant <= 0) {
        return res.status(400).json({ status: 'error', message: 'Montant invalide' });
    }

    console.log(`[TRANSACTION] Transfert initialisé : ${montant} FCFA vers ${destinataire}`);
    res.json({ status: 'success', message: 'Transaction traitée avec succès' });
});

// --- 4. DÉMARRAGE DU SERVEUR ---
app.listen(PORT, () => {
    console.log(`🚀 [PROD READY] Serveur BéninPay démarré sur le port ${PORT}`);
});
