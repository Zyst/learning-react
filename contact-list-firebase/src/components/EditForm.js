import React from 'react';

import AppActions from '../actions/AppActions';

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newState = event.target.value;
    const selected = this.state.selected;
    selected.name = newState;
    this.setState({ selected });
  }

  handleSubmit(e) {
    e.preventDefault();

    const contact = {
      id: this.props.contactToEdit.id,
      name: this.refs.name.value.trim(),
      phone: this.refs.phone.value.trim(),
      email: this.refs.email.value.trim(),
    };

    AppActions.updateContact(contact);
  }

  render() {
    return (
      <div className="well">
        <h3>Edit Contact</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              ref="name"
              className="form-control"
              onChange={this.handleChange}
              value={this.props.contactToEdit.name}
              placeholder={this.props.contactToEdit.name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              ref="phone"
              className="form-control"
              onChange={this.handleChange}
              value={this.props.contactToEdit.phone}
              placeholder={this.props.contactToEdit.phone}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              ref="email"
              className="form-control"
              onChange={this.handleChange}
              value={this.props.contactToEdit.email}
              placeholder={this.props.contactToEdit.email}
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

EditForm.propTypes = {
  contactToEdit: React.PropTypes.object,
};

export default EditForm;
