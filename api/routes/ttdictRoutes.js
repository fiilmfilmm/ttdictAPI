'use strict';
module.exports = function (app, express, path) {
    var ttdict = require('../controllers/ttdictController');

    var router = express.Router();

    router.get('/', function (req, res) {
        // load the single view file
        //(angular will handle the page changes on the front-end)
        res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
    });

    router.get('/words', function (req, res) {
        ttdict.GetAllWords(function (result) {
            res.json(result);
        });
    });

    router.get('/words/:word', function (req, res) {
        ttdict.GetWords(req.params.word, function(result) {
            res.json(result);
        });
    });

    // REGISTER OUR ROUTES
    // ===========================================================
    // all of our routes will be prefixed with /api
    app.use('/api', router);

    // ** Need to move this to server.js **
    // serving static files in Express
    app.use(express.static(path.join(__dirname, '../', 'public', '')));
    app.use(express.static(path.join(__dirname, '../../', 'node_modules', '')));

    app.use(function (req, res) {
        res.status(404).send('url: ' + req.originalUrl + ' not found');
    });
};