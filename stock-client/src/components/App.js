import React from 'react';
import AppStore from '../stores/AppStore';
import AppAPI from '../utils/AppAPI';
import AppActions from '../actions/AppActions';

import StocksGraph from './stocks-display/StocksGraph';
import StocksContainer from './stocks-management/StocksContainer';

function getAppState() {
  return {
    stocks: AppStore.getStocks(),
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = getAppState();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AppStore.addChangeListener(this.onChange);

    AppAPI.getStocks();
  }

  onChange() {
    this.setState(getAppState());
  }

  componentUnmount() {
    AppStore.removeChangeListener(this.onChange);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="jumbotron">
            <StocksGraph />
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">
            <div className="card-block">
              <StocksContainer stocks={this.state.stocks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
