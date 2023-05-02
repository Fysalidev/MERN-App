const http = require('http');

// Création du serveur
const server = http.createServer((req, res) => {
    res.end('Génial ! Le serveur fonctionne !');
});

// Ecoute du serveur
server.listen(process.env.PORT || 3000);