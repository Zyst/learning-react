import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import { EventEmitter } from 'events';
import AppAPI from '../utils/AppAPI';

const CHANGE_EVENT = 'change';

let _searchText = '';
let _results = [];

class AppStoreClass extends EventEmitter {
  setSearchText(search) {
    _searchText = search.text;
  }

  getSearchText() {
    return _searchText;
  }

  getResults() {
    return _results;
  }

  setResults(results) {
    _results = results;
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

  if (action.actionType === AppConstants.SEARCH_TEXT) {
    AppAPI.searchText(action.search);

    AppStore.setSearchText(action.search);

    AppStore.emit(CHANGE_EVENT);
  } else if (action.actionType === AppConstants.SEARCH_RESULTS) {
    AppStore.setResults(action.results);

    AppStore.emit(CHANGE_EVENT);
  }

  return true;
});

export default AppStore;
