import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import AppAPI from '../utils/AppAPI';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let stocks = [];

class AppStoreClass extends EventEmitter {
  setStocks(incomingStocks) {
    stocks = incomingStocks;
  }

  addStock(stock) {
    stocks.push(stock);
  }

  getStocks() {
    return stocks;
  }

  deleteStock(stockId) {
    this.setStocks(stocks.filter(s => s.id !== stockId));
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

const AppStore = new AppStoreClass();

AppDispatcher.register((payload) => {
  const action = payload.action;

  if (action.actionType === AppConstants.ADD_STOCK) {
    AppStore.addStock(action.stock);

    AppAPI.addStock(action.stock);

    AppStore.emit(CHANGE_EVENT);
  } else if (action.actionType === AppConstants.RECEIVE_STOCKS) {
    AppStore.setStocks(action.stocks);

    AppStore.emit(CHANGE_EVENT);
  } else if (action.actionType === AppConstants.DELETE_STOCK) {
    AppStore.deleteStock(action.stockId);

    AppAPI.deleteStock(action.stockId);

    AppStore.emit(CHANGE_EVENT);
  } else if (action.actionType === AppConstants.GET_REMOTE_STOCK) {
    AppAPI.getRemoteStockValue(action.stock);

    AppStore.emit(CHANGE_EVENT);
  }

  return true;
});

export default AppStore;
