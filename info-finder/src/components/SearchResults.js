import React from 'react';

import Result from './Result';

class SearchResults extends React.Component {
  render() {
    let header = '';

    if (this.props.searchText) {
      header = <h2 className="page-header">Results for {this.props.searchText}</h2>;
    } else {
      header = '';
    }

    return (
      <div>
        {header}
        {this.props.results.map((result, index) =>
          <Result result={result} key={index} />)}
      </div>
    );
  }
}

SearchResults.PropTypes = {
  results: React.PropTypes.array,
  searchText: React.PropTypes.string,
};

export default SearchResults;
