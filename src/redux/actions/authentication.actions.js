import { UPDATE_AUTHENTICATION_STATE, UPDATE_AUTHENTICATION_LOADING_STATE } from '../reduxConstants';

/**
 * function to handle user-login flow.
 * @param {boolean} isAuthenticated
 * @param {boolean} isLoading
 * @returns {Function}
 */
export const updateAuthenticationState = (isAuthenticated, isLoading = false) => dispatch => dispatch({
  type: UPDATE_AUTHENTICATION_STATE,
  payload: { isAuthenticated, isLoading },
});
