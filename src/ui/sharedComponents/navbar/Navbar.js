import React from 'react';

import {navBar} from '../../../core/constants';
import Tabs from '../tabs';
import LangSelector from "../langSelector";

import './navbar.scss';

export const NavBar = (props) => {
  const {navigator} = props;
  const currentTab = navBar.findIndex((tab) => tab.url === navigator.currentPath);

  const tabs = navBar.map((tab) => tab.label);

  const handleTabChange = (index) => {
    navigator.replace(navBar[index].url);
  };

  return (
    <div id="navBar">
      <Tabs
        tabs={tabs}
        currentTab={currentTab}
        onTabChange={handleTabChange}
      />
      <LangSelector />
    </div>
  );
}
