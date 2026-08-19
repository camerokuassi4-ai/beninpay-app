const express = require('express');
const path = require('path');
const app = express();

// Sert les fichiers statiques du projet
app.use(express.static(__dirname));

// Route d'accueil vers le tableau de bord
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'tableau_de_bord', 'code.html'));
});

module.exports = app;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`));
