import SVG from './svg/';
import {fr, en} from './text';
import {LANGUAGES, LANGUAGES_COLLECTION} from "./constants";
import store from "../core/store";

// To access at n+1 string use 'key.key' template
export const findText = (key, lang) => {
  const keys = key.split('.');

  switch (lang) {
    case LANGUAGES.FR: {
      return keys.reduce((acc, k) => (acc[k] ? acc[k] : null), fr);
    }
    case LANGUAGES.EN: {
      return keys.reduce((acc, k) => (acc[k] ? acc[k] : null), en);
    }
    default: {
      return null;
    }
  }
}

export const injectPropsInText = (text, props) => {
  let finalText = text;
  Object.entries(props).forEach(([key, value]) => (
    finalText = text.replace(`#${key}#`, value)
  ));

  return finalText;
}

export default class AssetsHelpers {
  static getSVG(svgName) {
    return SVG[svgName];
  }

  static getText(key, props, lang = store.getState().core.lang) {
    if (!LANGUAGES_COLLECTION.includes(lang)) {
      return 'Invalid Language';
    }

    const text = findText(key, lang);
    const textWithPropsInjected = props && text ? injectPropsInText(text, props) : text;

    return textWithPropsInjected || 'Invalid Key';
  }
}