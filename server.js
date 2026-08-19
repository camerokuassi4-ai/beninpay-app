const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  // Remplace NOM_EXACT par le résultat du 'ls -d accueil*'
  res.sendFile(path.join(__dirname, 'NOM_EXACT', 'code.html'));
});

module.exports = app;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`));
