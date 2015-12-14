var express = require('express');
var tabuleiro = require('../app/routes/tabuleiro');

module.exports = function() {
    var app = express();
    app.port = 3000;

    // app.use(express.static, './public');
    tabuleiro(app);

    return app;
}
