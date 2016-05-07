import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    const username = this.refs.username.value.trim();

    if (username) {
      this.props.onFormSubmit(username);
    }

    this.refs.username.value = '';
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="searchBar">Search Github users</label>
          <input type="text" ref="username" className="form-control" />
        </form>
      </div>
    );
  }
}

export default Search;
