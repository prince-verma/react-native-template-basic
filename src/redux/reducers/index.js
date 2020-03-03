import { combineReducers } from 'redux';

import viewportReducer from './viewport.reducer';
import sideMenuReducer from './sideMenu.reducer';
import authenticationReducer from './authentication.reducer';

export default combineReducers({
  viewport: viewportReducer,
  sideMenu: sideMenuReducer,
  authentication: authenticationReducer,
});
