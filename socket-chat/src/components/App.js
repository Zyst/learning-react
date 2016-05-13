import React from 'react';

function getAppState() {
  return {

  };
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
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
