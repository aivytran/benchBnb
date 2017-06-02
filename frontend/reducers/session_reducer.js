import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import {merge} from 'lodash';

const initialState = {
  session: {
    currentUser: null,
    errors: []
  }
}


const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const newState = merge({}, state, action.currentUser);
      return newState;
    case RECEIVE_ERRORS:
      const newState1 = merge({}, state, action.errors);
      return newState1;
    default:
      return state;
  }
}

export default sessionReducer;
