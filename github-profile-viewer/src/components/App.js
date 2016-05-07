import React from 'react';
import ReactDOM from 'react-dom';

import Profile from './github/Profile';
import Search from './github/Search';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'Zyst',
      userData: [],
      userRepos: [],
      perPage: 10,
    };
  }

  handleFormSubmit(username) {
    this.setState({ username }, () => {
      this.getUserData();
      this.getUserRepos();
    });
  }

  // Get user data from github
  getUserData() {
    $.ajax({
      url: `https://api.github.com/users/${this.state.username}\
        ?client_id=${this.props.clientId}\
        &client_secret=${this.props.clientSecret}`,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          userData: data,
        });
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({
          userName: null,
        });

        alert('Not found');

        console.log(`xhr: ${xhr}, status: ${status}, 
          error: ${err}`);
      }.bind(this),
    });
  }

  // Get user data from github
  getUserRepos() {
    $.ajax({
      url: `https://api.github.com/users/${this.state.username}\
        /repos?per_page=${this.state.perPage}\
        &client_id=${this.props.clientId}\
        &client_secret=${this.props.clientSecret}\
        &sort=created`,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          userRepos: data,
        });
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({
          userName: null,
        });

        console.log(`xhr: ${xhr}, status: ${status}, 
          error: ${err}`);
      }.bind(this),
    });
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
      <div>
        <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
        <Profile {...this.state} />
      </div>
    );
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string,
};

App.defaultProps = {
  clientId: '',
  clientSecret: '',
};

export default App;
