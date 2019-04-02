import React from 'react';

import './styles.css';

const Button = props => (
  <button className="button" {...props}>
    {props.children}
  </button>
);

export default Button;
