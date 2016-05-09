var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var movie = {
      title: this.refs.title.value.trim()
    };

    AppActions.searchMovies(movie);
  },

  render: function() {
    return (
      <div className="search-form">
        <h1 className="text-center">
          Search for a Movie
        </h1>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                ref="title"
                placeholder="Enter a movie title..."
              />
              <button id="submit-movie" className="btn btn-primary btn-block">
                Search movies
              </button>
            </div>
          </form>
      </div>
    );
  }
});

module.exports = SearchForm;
