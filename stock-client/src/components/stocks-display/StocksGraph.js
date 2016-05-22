import React from 'react';
import {Line} from 'react-chartjs';

class StocksGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      chartOptions: {},
    };
  }

  getData() {
    return {
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: this.createDataset(this.props.stocks),
      },
    };
  }

  createDataset(stocks) {
    const result = stocks.map(stock => {
      const color = 'rgba(' + (Math.floor(Math.random() * 256)) +
        ',' + (Math.floor(Math.random() * 256)) + ',' +
        (Math.floor(Math.random() * 256)) + ',1' + ')';

      const data = stock.values.map(value => parseInt(value.price, 10));

      return {
        label: stock.name,
        fillColor: color.replace(',1)', ',0.4)'),
        pointColor: color,
        pointHighlightFill: '#fff',
        pointHighlightStroke: color,
        pointStrokeColor: '#fff',
        strokeColor: color,
        data,
      };
    });

    return result;
  }

  render() {
    const checker = this.getData();
    let line = '';

    if (checker.data.datasets.length > 0) {
      line = <Line data={checker.data} width="1000" height="600" />;
    }

    return (
      <div>
        {line}
      </div>
    );
  }
}

export default StocksGraph;
