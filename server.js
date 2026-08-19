const express = require('express');
const path = require('path');
const app = express();

// Sert les fichiers statiques du projet
app.use(express.static(__dirname));

// Redirige la racine (/) vers la page d'accueil de la banque
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'accueil_benin_pay', 'code.html'));
});

module.exports = app;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`));
