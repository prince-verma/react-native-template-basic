import { UPDATE_SELECTED_MENU } from '../reduxConstants';
import { INITIAL_APP_ROUTE } from '../../constants';

const initialState = {
  selectedMenuLabel: INITIAL_APP_ROUTE,
};

/**
 * User-Reducer
 * @param {Object} state - State object for user-reducer
 * @param {Object} action - action object
 * @returns {Object}
 */
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_SELECTED_MENU:
      return {
        ...state,
        selectedMenuLabel: payload,
      };
    default:
      return state;
  }
}
