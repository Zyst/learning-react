var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },
  setMovieResults: function(movies) {
    _movies = movies;
  },
  getMovieResults: function() {
    return _movies;
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  if (action.actionType === AppConstants.SEARCH_MOVIES) {
    AppAPI.searchMovies(action.movie);

    AppStore.emit(CHANGE_EVENT);
  } else if (action.actionType === AppConstants.RECEIVE_MOVIE_RESULTS) {
    AppStore.setMovieResults(action.movies);
  }

  return true;
});

module.exports = AppStore;
