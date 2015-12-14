var http = require('http');

var express = require('express');
var app = express();

app.get('/', function(req, resp) {
    var objeto = {
        matricula: '2422958',
        nome: 'Leonardo Minora',
        diretoria: 'DIATINF'
    };
    resp.json(objeto);
});

app.get('/pessoa/:id', function(req, resp) {
    var objeto = {
        matricula: req.params.id
    };
    resp.json(objeto);

});

var server = http.createServer(app);

server.listen(3000, function() {
    console.log('Servidor iniciado, aguardando connection...');
});
