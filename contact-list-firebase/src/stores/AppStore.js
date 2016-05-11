import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import { EventEmitter } from 'events';

import AppAPI from '../utils/AppAPI';

const CHANGE_EVENT = 'change';

let _contacts = [];
let _contactToEdit = '';

class AppStoreClass extends EventEmitter {
  saveContact(contact) {
    _contacts.push(contact);
  }

  getContacts() {
    return _contacts;
  }

  setContacts(contacts) {
    _contacts = contacts;
  }

  removeContact(contactId) {
    const index = _contacts.findIndex(x => x.id === contactId);
    _contacts.splice(index, 1);
  }

  updateContact(contact) {
    _contacts.forEach((c, index) => {
      if (c.id === contact.id) {
        _contacts.splice(index, 1);
        _contacts.push(contact);
      }
    });
  }

  getContactToEdit() {
    return _contactToEdit;
  }

  setContactToEdit(contact) {
    _contactToEdit = contact;
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

  if (action.actionType === AppConstants.SAVE_CONTACT) {
    // Store save
    AppStore.saveContact(action.contact);

    // Save to API
    AppAPI.saveContact(action.contact);

    AppStore.emit(CHANGE_EVENT);
  } else if (action.actionType === AppConstants.RECEIVE_CONTACTS) {
    AppStore.setContacts(action.contacts);

    AppStore.emit(CHANGE_EVENT);
  } else if (action.actionType === AppConstants.REMOVE_CONTACT) {
    // Store remove
    AppStore.removeContact(action.contactId);

    // API remove
    AppAPI.removeContact(action.contactId);

    AppStore.emit(CHANGE_EVENT);
  } else if (action.actionType === AppConstants.EDIT_CONTACT) {
    AppStore.setContactToEdit(action.contact);

    AppStore.emit(CHANGE_EVENT);
  } else if (action.actionType === AppConstants.UPDATE_CONTACT) {
    // Store update
    AppStore.updateContact(action.contact);

    // API update
    AppAPI.updateContact(action.contact);

    AppStore.emit(CHANGE_EVENT);
  }

  return false;
});

export default AppStore;
