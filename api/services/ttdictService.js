'use strict';

// Imports
// ===========================================================
var ttdictRepository = require('../DALs/ttdictRepository');

// Public functions
// ===========================================================
var
    _getAllWords = function (callback) {
        ttdictRepository.FetchWords(function (err, result) {
            callback(result)
        });
    },

    _getWords = function (word, callback) {
        return _matchWords(word, callback);
    },

    // Private functions
    // ===========================================================
    _matchWords = function (word, callback) {
        ttdictRepository.FetchWords(function (err, words) {
            if (err) {
                callback([{ 'word': word, 'translate': 'ไม่พบผลการค้นหา' }]);
                return;
            }

            var result = [];

            if (words == undefined || words == null) {
                callback([{ 'word': word, 'translate': 'ไม่พบผลการค้นหา' }]);
                return;
            }

            for (var i = 0; i < words.length; i++) {
                if (words[i].word.includes(word))
                    result.push(words[i]);
                else if (words[i].translate.includes(word))
                    result.push(words[i]);
            }

            if (result.length == 0) {
                callback([{ 'word': word, 'translate': 'ไม่พบผลการค้นหา' }]);
                return;
            }

            callback(result);
        });
    };

// Exports
// ===========================================================
module.exports = {
    GetAllWords: _getAllWords,
    GetWords: _getWords
}