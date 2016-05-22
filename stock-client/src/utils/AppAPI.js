import AppActions from '../actions/AppActions';

import request from 'superagent';

const AppAPI = {
  addStock(stock) {
    const stocks = JSON.parse(localStorage.getItem('stocks')) || [];
    stocks.push(stock);
    localStorage.setItem('stocks', JSON.stringify(stocks));
  },

  getStocks() {
    const stocks = JSON.parse(localStorage.getItem('stocks')) || [];

    AppActions.receiveStocks(stocks);
  },

  deleteStock(stockId) {
    let stocks = JSON.parse(localStorage.getItem('stocks')) || [];

    stocks = stocks.filter(s => s.id !== stockId);

    localStorage.setItem('stocks', JSON.stringify(stocks));
  },

  updateStock(stock) {
    let stocks = JSON.parse(localStorage.getItem('stocks')) || [];

    stocks.map((s, index) => {
      if (s.id === stock.id) {
        stocks[index] = stock;
      }
    });

    localStorage.setItem('stocks', JSON.stringify(stocks));

    this.getStocks();
  },

  getRemoteStockValue(stock) {
    const stocks = JSON.parse(localStorage.getItem('stocks')) || [];

    const baseUrl = 'https://www.google.com';
    const path = '/finance/info?client=ig&q=';

    request
      .get(`${baseUrl}${path}${stock.name}`)
      .end((err, response) => {
        if (!err) {
          const res = JSON.parse(response.text.substring(3));

          const quote = {
            ticker: res[0].t,
            exchange: res[0].e,
            price: res[0].l_cur,
            change: res[0].c,
            change_percent: res[0].cp,
            last_trade_time: res[0].lt,
            dividend: res[0].div,
          };

          stocks.map(s => {
            if (s.name === quote.ticker) {
              // We remove the first element
              if (s.values.length >= 10) {
                s.values.shift();
              }
              s.values.push(quote);

              this.updateStock(s);
            }
          });
        }
      });
  },

  updateStockValues() {
    const stocks = JSON.parse(localStorage.getItem('stocks')) || [];

    stocks.forEach(stock => this.getRemoteStockValue(stock));

    setTimeout(() => {
      this.updateStockValues();
    }, 10000);
  },
};

export default AppAPI;
