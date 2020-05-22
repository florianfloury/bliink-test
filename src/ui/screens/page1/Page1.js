import React from 'react';

import {Button} from '../../sharedComponents';

import './page1.scss';
import AssetsHelpers from "../../../assets/assetsHelpers";

export const Page1 = (props) => {
  const { count, setCount } = props;

  return (
    <div className="page1">
      <span className="text">{count}</span>
      <div className="buttons">
        <Button
          label={AssetsHelpers.getText('add')}
          onClick={() => setCount(count + 1)}
          edgePrimary
        />
        <Button
          label={AssetsHelpers.getText('subtract')}
          onClick={() => setCount(count - 1)}
        />
      </div>
    </div>
  );
};

