import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const AppActions = {
  saveContact(contact) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SAVE_CONTACT,
      contact,
    });
  },

  receiveContacts(contacts) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_CONTACTS,
      contacts,
    });
  },

  removeContact(contactId) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_CONTACT,
      contactId,
    });
  },

  editContact(contact) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.EDIT_CONTACT,
      contact,
    });
  },

  updateContact(contact) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.UPDATE_CONTACT,
      contact,
    });
  },
};

export default AppActions;
