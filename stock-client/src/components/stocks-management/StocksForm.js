import React from 'react';

import AppActions from '../../actions/AppActions';

class StocksForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    AppActions.addStock(this.refs.stock.value.trim());

    this.refs.stock.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            ref="stock"
            placeholder="Enter a stock..."
          />
          <span className="input-group-btn">
            <button className="btn btn-success" type="submit">
              <span className="fa fa-send-o"></span>
            </button>
          </span>
        </div>
      </form>
    );
  }
}

export default StocksForm;