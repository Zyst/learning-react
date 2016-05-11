import React from 'react';
import AppActions from '../actions/AppActions';

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const contact = {
      name: this.refs.name.value.trim(),
      phone: this.refs.phone.value.trim(),
      email: this.refs.email.value.trim(),
    };

    this.refs.name.value = '';
    this.refs.phone.value = '';
    this.refs.email.value = '';

    AppActions.saveContact(contact);
  }

  render() {
    return (
      <div className="well">
        <h3>Add Contact</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              ref="name"
              className="form-control"
              placeholder="Add contact name..."
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              ref="phone"
              className="form-control"
              placeholder="Add contact phone..."
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              ref="email"
              className="form-control"
              placeholder="Add contact email..."
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddForm;
