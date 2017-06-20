'use strict';

var cache = [];

// Public functions
// ===========================================================
var
    _getCache = function () {
        return cache;
    },

    _setCache = function (words) {
        cache = words;
    };

// Exports
// ===========================================================
module.exports = {
    Get: _getCache,
    Set: _setCache
}