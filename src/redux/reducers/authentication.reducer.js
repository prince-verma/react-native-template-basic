import { UPDATE_AUTHENTICATION_LOADING_STATE, UPDATE_AUTHENTICATION_STATE } from '../reduxConstants';

const initialState = {
  isLoading: true,
  isAuthenticated: false,
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
    case UPDATE_AUTHENTICATION_STATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}

