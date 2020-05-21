import React from 'react';

import {navBar} from '../../../core/constants';
import Tabs from '../tabs';

import './navbar.scss';

export const NavBar = (props) => {
  const tabs = navBar.map((tab) => tab.label);

  const handleTabChange = (index) => {
    props.navigator.replace(navBar[index].url);
  };

  return (
    <Tabs
      tabs={tabs}
      onTabChange={handleTabChange}
    />
  );
}
