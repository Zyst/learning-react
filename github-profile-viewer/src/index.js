import React from 'react';
import ReactDOM from 'react-dom';

import GithubSuperSecrets from './components/GithubSuperSecrets';

// GithubSuperSecrets is just a wrapper for <App /> with api clientId and clientSecret
// it is in .gitignore to avoid publicizing the api keys
ReactDOM.render(
  <GithubSuperSecrets />,
  document.getElementById('app')
);
