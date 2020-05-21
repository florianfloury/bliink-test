import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {history} from './history';
import {HomeRedux} from '../redux';

const navigator = () => ({
  push: (url, state) => history.push(url, state),
  back: () => history.goBack(),
  replace: (url, state) => history.replace(url, state)
});

const reducers = {
  home: HomeRedux.reducer,
};

const enhanceReducer = combineReducers({...reducers, navigator});

const store = createStore(
  enhanceReducer,
  applyMiddleware(thunk)
);

export default store;