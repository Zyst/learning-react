import React from 'react';
import { Link, IndexLink } from 'react-router';

class List extends React.Component{
  render() {
    return (
      <div>
        <p>You are here: <IndexLink to="/" activeClassName="active">Home</IndexLink></p>
        <p>Please choose a repository from the list below:</p>
        <ul>
          <li><Link to="/detail/react">React</Link></li>
          <li><Link to="/detail/react-native">React Native</Link></li>
          <li><Link to="/detail/react">Jest</Link></li>
          <li><Link to="/user/zyst">Zyst</Link></li>
        </ul>
      </div>
    );
  }
}

export default List;
