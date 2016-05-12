import React from 'react';
import AppActions from '../actions/AppActions';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.searchText = this.searchText.bind(this);
  }

  searchText(e) {
    e.preventDefault();

    const search = {
      text: this.refs.text.value.trim(),
    };

    AppActions.searchText(search);
  }

  render() {
    return (
      <div className="well">
        <form onSubmit={this.searchText}>
          <div className="form-group">
            <label htmlFor="">Search for something...</label>
            <input
              type="text"
              className="form-control"
              ref="text"
              onKeyUp={this.searchText}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
