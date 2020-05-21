import {pathRoute} from './constants';
import {Home, Page1} from '../ui/screens';

export const routes = ({
  home: {
    path: pathRoute.HOME,
    component: Home,
    auth: false,
  },
  page1: {
    path: pathRoute.PAGE_1,
    component: Page1,
    auth: false,
  }
});

export default routes;