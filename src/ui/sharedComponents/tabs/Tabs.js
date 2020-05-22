import React, {useState} from 'react';
import classNames from 'classnames'

import {LifecycleHelpers} from "../../../utils";

export const Tabs = (props) => {
  const {tabs, currentTab, onTabChange} = props;
  const [selectedTab, setSelectedTab] = useState(currentTab || 0);

  LifecycleHelpers.useDidUpdate(() => {
    onTabChange(selectedTab);
  }, [onTabChange, selectedTab]);

  return (
    <nav className="tabs-wrapper">
      <ul className="tabs">
        {
          tabs.map((tab, index) => {
            const tabStyle = classNames({
              'tabs-item': true,
              'selected': selectedTab === index
            })

            return (
              <li
                key={index}
                className={tabStyle}
                onClick={() => setSelectedTab(index)}
              >
                {tab}
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}