/**
 * Toolbar reducer.
 * @module reducers/toolbar/toolbar
 */

import { GET_NAVROOT } from '@plone/volto/constants/ActionTypes';

const initialState = {
  error: null,
  loaded: false,
  loading: false,
  navroot: {},
};

/**
 * navroot reducer.
 * @function navroot
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default function navroot(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_NAVROOT}_PENDING`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true,
        navroot: {},
      };
    case `${GET_NAVROOT}_SUCCESS`:
      return {
        ...state,
        error: null,
        loaded: true,
        loading: false,
        navroot: action.result,
      };
    case `${GET_NAVROOT}_FAIL`:
      return {
        ...state,
        error: action.result.error,
        loaded: false,
        loading: false,
        navroot: {},
      };
    default:
      return state;
  }
}