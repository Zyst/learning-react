import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const AppActions = {
  addStock(stock) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_STOCK,
      stock,
    });
  },
  receiveStocks(stocks) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_STOCKS,
      stocks,
    });
  },
  deleteStock(stockId) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DELETE_STOCK,
      stockId,
    });
  },
};

export default AppActions;
