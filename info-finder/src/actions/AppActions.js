import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const AppActions = {
  searchText(search) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_TEXT,
      search,
    });
  },

  receiveResults(results) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_RESULTS,
      results,
    });
  },
};

export default AppActions;
