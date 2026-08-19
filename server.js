const express = require('express');
const path = require('path');
const app = express();

// Sert les fichiers statiques (CSS, JS, images)
app.use(express.static(__dirname));

// Route racine (Page d'accueil)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'accueil_beninpay', 'code.html'));
});

// Route générique pour charger n'importe quelle page HTML (ex: /connexion/code.html)
app.get('/:folder/code.html', (req, res) => {
  const { folder } = req.params;
  res.sendFile(path.join(__dirname, folder, 'code.html'));
});

module.exports = app;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`));
