import React from 'react';

import AppActions from '../actions/AppActions';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();

    AppActions.editContact(this.props.contact);
  }

  handleRemove(e) {
    e.preventDefault();

    AppActions.removeContact(this.props.contact.id);
  }

  render() {
    return (
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.phone}</td>
        <td>{this.props.contact.email}</td>
        <td>
          <a
            href="#"
            className="btn btn-default"
            onClick={this.handleEdit}
          >
            Edit
          </a>
        </td>
        <td>
          <a
            href="#"
            className="btn btn-danger"
            onClick={this.handleRemove}
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
}

Contact.propTypes = {
  contact: React.PropTypes.object,
};

export default Contact;
