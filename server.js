const express = require('express');
const path = require('path');
const app = express();

// Sert tous les fichiers statiques (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// Route d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'tableau_de_.../code.html'));
});

module.exports = app;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`));
