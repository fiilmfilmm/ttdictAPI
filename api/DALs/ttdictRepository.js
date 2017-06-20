'use strict';

// Import
// ===========================================================
var db = require('../../dbConnection');
// var Word = require('../models/wordModel');

// Functions
// ===========================================================
var
    _fetchWords = function (callback) {
        db.get().collection('ttdictcollection').find().toArray(function (err, docs) {
            callback(err, docs);
        });
    };

// Exports
// ===========================================================
module.exports = {
    FetchWords: _fetchWords
}