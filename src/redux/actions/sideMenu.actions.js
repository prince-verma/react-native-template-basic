import { UPDATE_SELECTED_MENU } from '../reduxConstants';

/**
 * function to handle user-login flow.
 * @param {Object} payload - sideMenu Label
 * @returns {function}
 */
export const updateSelectedMenuLabel = payload => dispatch => dispatch({ type: UPDATE_SELECTED_MENU, payload });
