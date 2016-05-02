import React from 'react';

class App extends React.Component {
  render() {
    let year = new Date().getFullYear();

    return (
      <div>
        <header>
          <h1>Unofficial Github Browser v0.1</h1>
        </header>

        {this.props.children}

        <footer>
          Copyright {year}. All Rights reserved.
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
