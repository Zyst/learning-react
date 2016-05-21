import AppActions from '../actions/AppActions';

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
};

export default AppAPI;
