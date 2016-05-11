import React from 'react';

import Contact from './Contact';
import AppActions from '../actions/AppActions';

class ContactList extends React.Component {
  handleRemove(id) {
    AppActions.removeContact(id);
  }

  render() {
    return (
      <div className="well">
        <h3>Contacts</h3>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.contacts.map((contact, index) =>
                <Contact contact={contact} key={index} />)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: React.PropTypes.array,
};

export default ContactList;
