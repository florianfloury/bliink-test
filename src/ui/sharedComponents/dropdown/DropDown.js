import React, {useState} from "react";
import classNames from 'classnames';

import './dropdown.scss';

export const DropDown = (props) => {
  const {options, selected, onOptionChange} = props;
  const [current, setCurrent] = useState(selected ? selected : options[0]);
  const [display, setDisplayable] = useState(false);

  const handleSelectOption = (option) => {
    setCurrent(option);
    setDisplayable(false);
    onOptionChange(option);
  }

  const otherOptions = options.filter((opt) => opt !== current);

  const classNamesOptionsList = classNames({
    'options-list': true,
    'visible': display,
  })

  const classNamesOption = classNames({
    'option-item': true,
    'visible': display,
  })

  return (
    <div className="dropDown">
      <span className={classNamesOption} onClick={() => setDisplayable(!display)}>
        {current}
      </span>
      <ul className={classNamesOptionsList}>
        {otherOptions.map((opt) => (
          <li key={opt} className={classNamesOption} onClick={() => handleSelectOption(opt)}>
            {opt}
          </li>
        ))}
      </ul>
    </div>
  )
};