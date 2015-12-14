// app/controllers/tabuleiro.js
var Tabuleiro = require('../models/tabuleiro');

module.exports = function() {
    var controller = {};

    controller.jogos_online = function(req, resp) {
        resp.status(200).json( Tabuleiro.online() );
    };

    return controller;
}
