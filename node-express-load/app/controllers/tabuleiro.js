// app/controllers/tabuleiro.js

module.exports = function(app) {
    var controller = {};
    // var Tabuleiro = require('../models/tabuleiro');
    var Tabuleiro = app.models.tabuleiro;

    controller.jogos_online = function(req, resp) {
        resp.status(200).json( Tabuleiro.online() );
    };

    return controller;
}
