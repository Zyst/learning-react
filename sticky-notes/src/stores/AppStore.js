import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import { EventEmitter } from 'events';
import AppAPI from '../utils/AppAPI';

const CHANGE_EVENT = 'change';

let _notes = [];

class AppStoreClass extends EventEmitter {
  addNote(note) {
    _notes.push(note);
  }

  getNotes() {
    return _notes;
  }

  setNotes(notes) {
    _notes = notes;
  }

  deleteNote(noteId) {
    _notes = _notes.filter(n => n._id.$oid !== noteId);
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

  if (action.actionType === AppConstants.ADD_NOTE) {
    // Store save
    AppStore.addNote(action.note);

    // API Save
    AppAPI.addNote(action.note);

    // Emit change
    AppStore.emit(CHANGE_EVENT);
  } else if (action.actionType === AppConstants.RECEIVE_NOTES) {
    // Store set
    AppStore.setNotes(action.notes);

    // Emit change
    AppStore.emit(CHANGE_EVENT);
  } else if (action.actionType === AppConstants.DELETE_NOTE) {
    // Store delete
    AppStore.deleteNote(action.noteId);

    // API Delete
    AppAPI.deleteNote(action.noteId);

    // Emit change
    AppStore.emit(CHANGE_EVENT);
  }

  return true;
});

export default AppStore;
