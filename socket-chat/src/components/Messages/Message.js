import React from 'react';

class Message extends React.Component {
  timeStampToDate(timeStamp) {
    const date = new Date(timeStamp);
    const hours = `0${date.getHours()}`;
    const minutes = `0${date.getMinutes()}`;
    return `${hours.substr(-2)}:${minutes.substr(-2)}`;
  }

  render() {
    const { text, timeStamp, user } = this.props.message;
    const stamp = this.timeStampToDate(timeStamp);

    return (
      <div className="well">
        <div>
          <span className="text-info">{user}</span>
          <span className="text-muted float-left"> at {stamp}</span>
        </div>
        <p>{text}</p>
      </div>
    );
  }
}

Message.propTypes = {
  message: React.PropTypes.object,
};

export default Message;
