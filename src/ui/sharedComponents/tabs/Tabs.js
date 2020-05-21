import React, {useState, useEffect} from 'react';
import classNames from 'classnames'

export const Tabs = (props) => {
  const {tabs, onTabChange} = props;
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
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