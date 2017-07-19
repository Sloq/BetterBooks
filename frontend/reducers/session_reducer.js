import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER }
  from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
    currentUser: null,
    errors: []
  };

const SessionReducer = ( state = defaultState, action ) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState.currentUser = action.currentUser;
      return newState;
    case RECEIVE_ERRORS:
      newState = {currentUser: null, errors: action.errors};
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
