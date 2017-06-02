import {signup, login, logout} from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const signUp = (user) => (dispatch) => {
  return signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
}

export const logIn = (user) => (dispatch) => {
  return login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
}

export const logOut = () => (dispatch) => {
  return logout()
    .then(dispatch(receiveCurrentUser(null)))
    .fail(error => dispatch(receiveErrors(error)))
}
