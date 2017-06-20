'use strict';

// Imports
// ===========================================================
var mongodb = require('mongodb');

var state = {
    db: null
};

// Functions
// ===========================================================
var 
  _connect = function(url, done) {
    if(state.db) return done();

    mongodb.MongoClient.connect(url, function(err, db) {
        if(err) return done(err);
        state.db = db;
        done();
    });
  },

  _get = function() {
    return state.db;
  },

  _close = function(done) {
    if(state.db) {
        state.db.close(function(err, result) {
            state.db = null;
            state.mode = null;
            done(err);
        });
    }
  };

// Exports
// ===========================================================
module.exports = {
  connect: _connect,
  get: _get,
  close: _close
}