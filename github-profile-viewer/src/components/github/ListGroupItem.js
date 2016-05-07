import React from 'react';

const ListGroupItem = ({ type, login }) => (
  <li className="list-group-item">
    <strong>
      {type}:
    </strong>
    {` ${login}`}
  </li>
);

export default ListGroupItem;
