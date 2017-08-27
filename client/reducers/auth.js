// We import constants to name our actions' type
import {
  LOGIN,
  LOGOUT,
  SIGNUP,
} from '../actions/constants'

const defaultState = {
	isLoggedIn: false,
	username: '',
	password: ''
};
 
export default function reducer(state = defaultState, action) {
	switch (action.type) {
		case SIGNUP: 
			return Object.assign({}, state, { 
				isLoggedIn: true,
				username: action.username,
				password: action.password
			});
		case LOGIN: 
			return Object.assign({}, state, { 
				isLoggedIn: true,
				username: action.username,
				password: action.password
			});
		case LOGOUT:
			return Object.assign({}, state, { 
				isLoggedIn: false,
				username: '',
				password: ''
			});
		default:
			return state;
	}
}