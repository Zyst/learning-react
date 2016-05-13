import React from 'react';

class UserList extends React.Component {
  render() {
    return (
      <div>
        <h3>Users ({this.props.users.length})</h3>
        <ul className="list-group">
          {this.props.users.map((user, i) =>
            <li className="list-group-item" key={i}>{user.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default UserList;
