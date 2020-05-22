import {LANGUAGES} from "../../assets/constants";

const initialState = {
  lang: LANGUAGES.FR,
}

export const setLang = (state, payload) => ({
  ...state,
  lang: payload.lang,
})

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'SET_LANG': return setLang(state, payload);
    default: return state;
  }
}

export default reducer;