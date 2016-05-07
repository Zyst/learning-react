import React from 'react';
import ReactDOM from 'react-dom';

const Repo = ({ repo }) => (
  <li className="list-group-item">
    <a href={repo.html_url}>
      {repo.name}
    </a>
    {`: ${repo.description}`}
  </li>
);


export default Repo;
