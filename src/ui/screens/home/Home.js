import React from 'react';

import {SVG_NAME} from '../../../assets/constants';
import AssetsHelpers from '../../../assets/assetsHelpers';

import './home.scss';

export const Home = () => (
  <div className="home">
    <header className="App-header">
      <img src={AssetsHelpers.getSVG(SVG_NAME.LOGO)} className="App-logo" alt="logo"/>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);
