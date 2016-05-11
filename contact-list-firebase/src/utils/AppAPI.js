import AppActions from '../actions/AppActions';
import Firebase from 'firebase';

const AppAPI = {
  saveContact(contact) {
    this.firebaseRef = new Firebase('https://contactli.firebaseio.com/contacts');

    this.firebaseRef.push({
      contact,
    });
  },

  getContacts() {
    this.firebaseRef = new Firebase('https://contactli.firebaseio.com/contacts');

    const contacts = [];

    this.firebaseRef.once('value', snapshot => {
      snapshot.forEach(child => {
        contacts.push({
          id: child.key(),
          name: child.val().contact.name,
          phone: child.val().contact.phone,
          email: child.val().contact.email,
        });

        AppActions.receiveContacts(contacts);
      });
    });
  },

  removeContact(contactId) {
    this.firebaseRef = new Firebase(`https://contactli.firebaseio.com/contacts/${contactId}`);
    this.firebaseRef.remove();
  },

  updateContact(contact) {
    this.firebaseRef = new Firebase(`https://contactli.firebaseio.com/contacts/${contact.id}/contact`);

    const updatedContact = {
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
    }

    this.firebaseRef.update(updatedContact);
  },
};

export default AppAPI;
