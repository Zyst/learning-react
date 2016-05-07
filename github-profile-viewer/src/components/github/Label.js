import React from 'react';
import ReactDOM from 'react-dom';

const Label = ({ classes, type, name }) => (
  <span className={classes}>
    {type} {name}
  </span>
);

export default Label;
