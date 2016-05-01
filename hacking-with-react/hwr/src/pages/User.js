import React from 'react';
import ajax from 'superagent';

class User extends React.Component{

  constructor(props) {
    super(props);

    this.state = { user: [] };

    ajax.get(`https://api.github.com/users/${this.props.params.user}/events`)
      .end((error, response) => {
        if (!error && response) {
          console.dir(response.body);
          this.setState({ user: response.body });
        } else {
          console.log(`Error fetching user ${this.props.params.user}`, error);
        }
      })
  }

  renderCommits() {
    return this.state.user.map((user, index) => {
      return (
        <div key={ index }>
          <img src={ user.actor.avatar_url } alt="user" />
          <br/>
          <a href={user.repo.url}>{ user.repo.url }</a>
          <p>{user.type}: { user.repo.name }</p>
        </div>
      );
    });
  }

  render() {
    let commits = this.renderCommits();

    return (
      <div>
        <h2>{this.props.params.user}</h2>
        <div>
          { commits }
        </div>
      </div>
    );
  }
}

export default User;
