import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.emit('messageAdded', {
      timeStamp: Date.now(),
      text: this.refs.text.value.trim(),
      user: this.props.user.name,
    });

    // Clear form
    this.refs.text.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              ref="text"
              placeholder="Send a message"
            />
            <span className="input-group-btn">
              <button className="btn btn-success" type="submit">
                <span className="glyphicon glyphicon-send"></span>
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

MessageForm.propTypes = {
  emit: React.PropTypes.func,
  user: React.PropTypes.object.isRequired,
};

export default MessageForm;
