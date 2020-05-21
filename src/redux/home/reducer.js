export const initialState = {
  count: 0,
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  if(type === 'SET_COUNT') {
    return {
      ...state,
      count: payload.count,
    };
  }

  return state;
};

export default reducer;