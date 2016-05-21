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
    const values = this.props.stock.values;
    let classForStock = '';
    let arrowForStock = '';
    let percentage = '';

    // Positive number
    if (values.length > 0 && values[values.length - 1].change_percent > 0) {
      classForStock = 'text-success';
      arrowForStock = <span className="fa fa-arrow-up"></span>;
      percentage = <span>{values[values.length - 1].change_percent}%</span>;
    } else if (values.length === 0 || values[values.length - 1].change_percent === 0) {
      classForStock = 'text-info';
      arrowForStock = <span className="fa fa-arrow-right"></span>;
      if (values.length !== 0) {
        percentage = <span>{values[values.length - 1].change_percent}%</span>;
      }
    } else {
      classForStock = 'text-danger';
      arrowForStock = <span className="fa fa-arrow-down"></span>;
      percentage = <span>{values[values.length - 1].change_percent}%</span>;
    }

    return (
      <div className="row">
        <div className="col-lg-10">
          <div className="row">
            <div className="col-lg-4">
              <h4 className={classForStock}>
                {this.props.stock.name}
              </h4>
            </div>
            <div className="col-lg-4">
              <h4 className={classForStock}>
                {percentage}
              </h4>
            </div>
            <div className="col-lg-3">
              <h4 className={classForStock}>
                {arrowForStock}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <span
            className="fa fa-trash delete-stocks pull-lg-right"
            onClick={this.deleteStock}
          >
          </span>
        </div>
        <hr />
      </div>
    );
  }
}

export default Stock;
