import React from 'react';
import classNames from 'classnames';

import './buttons.scss';

export const Button = (props) => {
  const {label, onClick} = props;

  const buttonClassNames = classNames({
    button: true,
    primary: !!props.primary,
    'edge-primary': !!props.edgePrimary,
  })

  return (
    <div className={buttonClassNames} onClick={onClick}>
      {label}
    </div>
  );
};

Button.defaultProps = {
  primary: true,
  edgePrimary: false
};