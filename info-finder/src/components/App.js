import React from 'react';
import AppStore from '../stores/AppStore';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function getAppState() {
  return {
    results: AppStore.getResults(),
    searchText: AppStore.getSearchText(),
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = getAppState();
  }

  componentDidMount() {
    AppStore.addChangeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState(getAppState());
  }

  componentUnmount() {
    AppStore.removeChangeListener(this.onChange.bind(this));
  }

  render() {
    return (
      <div>
        <SearchForm />
        <SearchResults
          results={this.state.results}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}

export default App;
