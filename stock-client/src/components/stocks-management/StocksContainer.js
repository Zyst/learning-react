import React from 'react';

import StocksForm from './StocksForm';
import StocksList from './StocksList';

class StocksContainer extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <StocksForm />
        <hr />
        <StocksList />
      </div>
    );
  }
}

export default StocksContainer;
