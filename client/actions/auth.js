// We import constants to name our actions' type
import {
  LOGIN,
  LOGOUT,
  SIGNUP
} from './constants'

import authService from '../components/auth/authService';

export const login = (username, password) => {
    return {
        type: LOGIN,
        username: username,
        password: password
    };
};

export const signup = (id, username) => {
    return {
        type: SIGNUP,
        userid: id,
        username: username
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};

export const logout_success = () => {
    return (dispatch) => {
      authService.logout()
      .then(() => {
        dispatch(browserHistory.push('/'));
      }).catch(e => {
      });
    };
};

export const signup_success = (username, password) => {
    return (dispatch) => {
    };
};

export const login_success = (username, password) => {
    return (dispatch) => {
    };
};