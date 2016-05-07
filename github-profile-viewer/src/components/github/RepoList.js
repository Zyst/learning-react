import React from 'react';
import ReactDOM from 'react-dom';

import Repo from './Repo';

class RepoList extends React.Component {
  render() {
    return(
      <div>
        <ul className="list-group">
          {
            this.props.userRepos.map(repo => {
              return <Repo
                        repo={repo}
                        key={repo.id}
                        {...this.props}
                      />
            })
          }
        </ul>
      </div>
    );
  }
}

export default RepoList;
