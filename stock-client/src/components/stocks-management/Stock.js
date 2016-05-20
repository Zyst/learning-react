import React from 'react';

class Stock extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.stock}</h4>
      </div>
    );
  }
}

export default Stock;
