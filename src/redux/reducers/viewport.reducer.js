import { UPDATE_VIEWPORT } from '../reduxConstants';

const initialState = {
  fontScale: 0,
  width: 0,
  height: 0,
  scale: 0,
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
    case UPDATE_VIEWPORT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}

