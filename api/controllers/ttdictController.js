'use strict';

// Imports
// ===========================================================
var ttdictService = require('../services/ttdictService');

// Functions
// ===========================================================
var 
  _getAllWords = function(callback) {
    ttdictService.GetAllWords(function (result) {
      callback(result);
    });
  },

  _getWords = function(word, callback) {
    ttdictService.GetWords(word, function(result) {
      callback(result);
    });
  };

// Exports
// ===========================================================
module.exports = {
  GetAllWords: _getAllWords,
  GetWords: _getWords
}