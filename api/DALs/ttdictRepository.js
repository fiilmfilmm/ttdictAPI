'use strict';

// Import
// ===========================================================
var db = require('../../dbConnection');
var cache = require('./ttdictCache');

// Functions
// ===========================================================
var
    _fetchWords = function (callback) {
        var words = cache.Get();
        if (words.length == 0) {
            db.get().collection('ttdictcollection').find().toArray(function (err, docs) {
                cache.Set(docs);
                callback(err, docs);
            });
        }
        else {
            callback(null, words);
        }
    };

// Exports
// ===========================================================
module.exports = {
    FetchWords: _fetchWords
}