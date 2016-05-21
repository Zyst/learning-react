import React from 'react';

import Stock from './Stock';

class StocksList extends React.Component {
  render() {
    const list = this.props.stocks.map((stock, index) =>
      <Stock stock={stock} key={index} />);
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default StocksList;
