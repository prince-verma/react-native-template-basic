import { UPDATE_VIEWPORT } from '../reduxConstants';

/**
 * function to handle user-login flow.
 * @param {Object} payload
 * @returns {function}
 */
export const updateViewportDimensions = payload => dispatch => dispatch({ type: UPDATE_VIEWPORT, payload });
