import React from 'react';
import AppActions from '../actions/AppActions';

function getAppState() {
  return {

  };
}

class App extends React.Component {
  getInitialState() {
    return getAppState();
  }

  componentDidMount() {

  }

  componentUnmount() {

  }

  _onChange() {
    this.setState(getAppState());
  }

  render() {
    return (
      <div>
        <h1>Haters in the club say whaa!</h1>
      </div>
    );
  }
}

export default App;
