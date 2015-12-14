var express = require('express');
var load = require('express-load');
// var tabuleiro = require('../app/routes/tabuleiro');

module.exports = function() {
    var app = express();
    app.port = 3000;

    // app.use(express.static, './public');
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    // tabuleiro(app);

    return app;
}
