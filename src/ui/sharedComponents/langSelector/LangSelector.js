import React, {useState, useEffect, useRef} from "react";
import classNames from 'classnames';

import {LANGUAGES_COLLECTION} from "../../../assets/constants";
import AssetsHelpers from "../../../assets/assetsHelpers";

import './langSelector.scss';

export const LangSelector = (props) => {
  const {lang, setLang} = props;
  const [display, setDisplayable] = useState(false);
  const langSelectorRef = useRef();

  useEffect(() => {
    document.addEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleClick = (event) => {
    if(langSelectorRef && !langSelectorRef.current.contains(event.target)){
      setDisplayable(false)
    }
  }

  const handleSelectLang = (lang) => {
    setLang(lang);
    setDisplayable(false);
  }

  const otherLang = LANGUAGES_COLLECTION.filter((language) => language.label !== lang.label);

  const classNamesLangList = classNames({
    'lang-list': true,
    'visible': display,
  })

  const classNamesLang = classNames({
    'lang-item': true,
    'visible': display,
  })

  return (
    <div ref={langSelectorRef} className="lang-selector">
      <div className={classNamesLang} onClick={() => setDisplayable(!display)}>
        <img
          className="flag"
          src={AssetsHelpers.getSVG(lang.icon)}
          alt={lang.label}
        />
      </div>
      <ul className={classNamesLangList}>
        {otherLang.map((language) => (
          <li key={language} className={classNamesLang} onClick={() => handleSelectLang(language)}>
            <img
              className="flag"
              src={AssetsHelpers.getSVG(language.icon)}
              alt={language.label}
            />
          </li>
        ))}
      </ul>
    </div>
  )
};