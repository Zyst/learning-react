import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const name = this.refs.name.value.trim();

    this.props.setUser({
      name,
    });

    this.props.emit('userJoined', { name });

    this.refs.name.value = '';
  }

  render() {
    return (
      <div>
        <h3>Chat login</h3>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control"
            ref="name"
            placeholder="Choose a username"
          />
        </form>
      </div>
    );
  }
}

UserForm.propTypes = {
  emit: React.PropTypes.func,
  setUser: React.PropTypes.func,
};

export default UserForm;
