'use strict';

// Imports
// ===========================================================
var ttdictService = require('../services/ttdictService');

// Functions
// ===========================================================
var 
  _getAllWords = function(callback) {
    ttdictService.GetAllWords(function (err, result) {
      callback(err, result);
    });
  },

  _getWords = function(word, callback) {
    ttdictService.GetWords(word, function(err, result) {
      callback(err, result);
    });
  };

// Exports
// ===========================================================
module.exports = {
  GetAllWords: _getAllWords,
  GetWords: _getWords
}