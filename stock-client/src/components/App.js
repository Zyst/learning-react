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
      <div>
        <h1>Haters in the club say whaa!</h1>
      </div>
    );
  }
}

export default App;
