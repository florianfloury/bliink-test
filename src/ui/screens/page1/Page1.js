import React from 'react';

import {Button} from '../../sharedComponents';

import './page1.scss';

export const Page1 = (props) => {
  const { count, setCount } = props;

  return (
    <div className="page1">
      {count}
      <div className="buttons">
        <Button
          label="Ajouter"
          onClick={() => setCount(count + 1)}
          edgePrimary
        />
        <Button
          label="Supprimer"
          onClick={() => setCount(count - 1)}
        />
      </div>
    </div>
  );
};

