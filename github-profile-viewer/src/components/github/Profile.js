import React from 'react';
import ReactDOM from 'react-dom';

import Label from './Label';
import ListGroupItem from './ListGroupItem';
import RepoList from './RepoList';

class Profile extends React.Component {
  render() {
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.userData.name}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <img
                src={this.props.userData.avatar_url}
                className="thumbnail"
                style={{ width: '100%' }}
                alt="user"
              />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <Label
                    classes="label label-primary"
                    type={this.props.userData.public_repos}
                    name="Repos"
                  />
                  <Label
                    classes="label label-success"
                    type={this.props.userData.public_gists}
                    name="Public Gists"
                  />
                  <Label
                    classes="label label-info"
                    type={this.props.userData.followers}
                    name="Followers"
                  />
                  <Label
                    classes="label label-danger"
                    type={this.props.userData.following}
                    name="Following"
                  />
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-md-12">
                  <ul className="list-group">
                    <ListGroupItem
                      type="Username"
                      login={this.props.userData.login}
                    />
                    <ListGroupItem
                      type="Location"
                      login={this.props.userData.location}
                    />
                    <ListGroupItem
                      type="Email"
                      login={this.props.userData.email}
                    />
                  </ul>
                </div>
              </div>
              <div>
                <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit Profile</a>
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="col-md-12">
                <h3>User Repositories:</h3>
                <RepoList
                  userRepos={this.props.userRepos}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
