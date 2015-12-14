
module.exports = function(app) {
    var controller = require('../controllers/tabuleiro')();

    app.get('/tabuleiros/online', controller.jogos_online);
};
