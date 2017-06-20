// BASE SETUP
// ==========================================================

// call the package we need
var express = require('express');		// call express
var app = express();					// define our app using express
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var db = require('./dbConnection');

var port = process.env.PORT || 3000;	// set our port

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware
// ===========================================================

// Connect to Mongo on start
db.connect(process.env.MONGODB_URI, function (err) {
    if (err) {
        console.log('Unable to connect to Mongo.');
        process.exit(1);
    } else {
        // ROUTES for API
        // ===========================================================
        var routes = require('./api/routes/ttdictRoutes');
        routes(app, express, path);

        // START THE SERVER
        // ===========================================================
        app.listen(port, function () {
            console.log('ttdictAPI RESTful API server started on: ' + port);
        })
    }
})

