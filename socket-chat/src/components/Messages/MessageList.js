import React from 'react';

import Message from './Message';

class MessageList extends React.Component {
  render() {
    let placeholder = '';
    if (this.props.messages.length === 0) {
      placeholder = (
        <div className="well">
          <p className="lead">
            There doesn't seem to be anything here yet, try writting something
          </p>
        </div>
      );
    }
    return (
      <div>
        <h3 className="text-info">Messages</h3>
        {placeholder}
        {this.props.messages.map((message, index) =>
          <Message message={message} key={index} />)}
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array,
};

export default MessageList;
