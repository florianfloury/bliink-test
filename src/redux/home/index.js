import {homeActions} from './actions';
import {default as homeReducer} from './reducer';

const homeRedux = {
  actions: homeActions,
  reducer: homeReducer,
};

export default homeRedux;