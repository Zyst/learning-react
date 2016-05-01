import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Unoffician Github Browser v0.1</h1>
        </header>

        {this.props.children}

        <footer>
          Copyright {Date.now().getFullYear()}. All Rights reserved.
        </footer>
      </div>
    );
  }
}

export default App;
