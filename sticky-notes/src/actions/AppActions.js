import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const AppActions = {
  addNote(note) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_NOTE,
      note,
    });
  },

  receiveNotes(notes) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_NOTES,
      notes,
    });
  },

  removeNote(noteId) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DELETE_NOTE,
      noteId,
    });
  },
};

export default AppActions;
