import React from 'react';

import AppActions from '../../actions/AppActions';

class Stock extends React.Component {
  constructor(props) {
    super(props);

    this.deleteStock = this.deleteStock.bind(this);
  }

  deleteStock() {
    AppActions.deleteStock(this.props.stock.id);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-10">
          <h4>{this.props.stock.name}</h4>
        </div>
        <div className="col-lg-2">
          <span
            className="fa fa-trash delete-stocks pull-lg-right"
            onClick={this.deleteStock}
          >
          </span>
        </div>
      </div>
    );
  }
}

export default Stock;
