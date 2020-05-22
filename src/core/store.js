import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {history} from './history';
import {homeRedux, coreRedux} from '../redux';

const navigator = () => ({
  push: (url, state) => history.push(url, state),
  back: () => history.goBack(),
  replace: (url, state) => history.replace(url, state),
  currentPath: history.location.pathname,
});

const reducers = {
  core: coreRedux.reducer,
  home: homeRedux.reducer,
};

const enhanceReducer = combineReducers({...reducers, navigator});

const store = createStore(
  enhanceReducer,
  applyMiddleware(thunk)
);

export default store;