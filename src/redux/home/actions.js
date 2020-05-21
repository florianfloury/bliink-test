import {actionCreator} from '../helpers';

export const homeActions = {
  setCount: (count) => actionCreator('SET_COUNT', {count}),
};