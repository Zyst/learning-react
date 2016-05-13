import React from 'react';
import io from 'socket.io-client';

import MessageList from './Messages/MessageList';
import MessageForm from './Messages/MessageForm';
import UserList from './Users/UserList';
import UserForm from './Users/UserForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'disconnected',
      messages: [],
      users: [],
      user: '',
    };

    this.emit = this.emit.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  // Bind socket on connect
  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect.bind(this));
    this.socket.on('disconnect', this.disconnect.bind(this));
    this.socket.on('messageAdded', this.onMessageAdded.bind(this));
    this.socket.on('userJoined', this.onUserJoin.bind(this));
  }

  onMessageAdded(message) {
    this.setState({
      messages: this.state.messages.concat(message),
    });
  }

  onUserJoin(users) {
    this.setState({
      users,
    });
  }

  setUser(user) {
    this.setState({
      user,
    });
  }

  connect() {
    this.setState({
      status: 'connected',
    });

    console.log(`Connected: ${this.socket.id}`);
  }

  disconnect(users) {
    this.setState({
      users,
    });
  }

  emit(eventName, payload) {
    this.socket.emit(eventName, payload);
  }

  render() {
    let user = '';
    let messageForm = '';
    let userList = '';

    if (this.state.user) {
      user = <p className="text-muted">Welcome {this.state.user.name}</p>;
      userList = <UserList {...this.state} />;
      messageForm = <MessageForm {...this.state} emit={this.emit} />;
    } else {
      user = <UserForm {...this.state} emit={this.emit} setUser={this.setUser} />;
      messageForm = <p className="text-muted">You must select an username before commenting</p>;
    }

    return (
      <div className="row">
        <div className="col-md-8">
          <MessageList {...this.state} />
          {messageForm}
        </div>
        <div className="col-md-4">
          {user}
          {userList}
        </div>
      </div>
    );
  }
}

export default App;
