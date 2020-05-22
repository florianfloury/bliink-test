import React from 'react';

import {SVG_NAME} from '../../../assets/constants';
import AssetsHelpers from '../../../assets/assetsHelpers';

import './home.scss';

export const Home = () => (
  <div className="home">
    <header className="App-header">
      <img src={AssetsHelpers.getSVG(SVG_NAME.REACT_LOGO)} className="App-logo" alt="logo"/>
      <p className="text">
        {AssetsHelpers.getText('helloWorld.editFile', {path: 'src/App.js'})}
      </p>
      <a
        className="text"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {AssetsHelpers.getText('helloWorld.learnReact')}
      </a>
    </header>
  </div>
);
