import React from 'react';
import AppActions from '../actions/AppActions';

function getAppState() {
  return {

  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
  }

  componentDidMount() {

  }

  onChange() {
    this.setState(getAppState());
  }

  componentUnmount() {

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <div className="card">
            <div className="card-block">
              <p className="card-text">Left</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="jumbotron">
            <h1>Center</h1>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">
            <div className="card-block">
              <h3 className="card-text">Right</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
