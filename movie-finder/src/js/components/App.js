var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm');
var MovieResults = require('./MovieResults');

function getAppState() {
  return {
    movies: AppStore.getMovieResults()
  }
}

var App = React.createClass({
  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getAppState());
  },

  render: function() {
    var movieResults;

    if (this.state.movies == '') {
      movieResults = '';
    } else {
      movieResults = <MovieResults movies={this.state.movies} />
    }
    return (
      <div>
        <SearchForm />
        {movieResults}
      </div>
    );
  }
});

module.exports = App;
