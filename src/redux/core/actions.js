import {actionCreator} from "../helpers";

const actions = {
  setLang: (lang) => actionCreator('SET_LANG', {lang})
};

export default actions;