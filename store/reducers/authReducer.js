import * as actionTypes from '../actions/actionTypes';

const initalState = {
	login: null,
	signup: null,
	error: false,
	errorMessages: '',
};

const authReducer = (state = initalState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			switch (action.value) {
				case 401:
					return {
						...state,
						login: null,
						error: true,
						errorMessages: 'Wrong email or password',
					};
				case 403:
					return {
						...state,
						login: null,
						error: true,
						errorMessages: 'Unauthorized / Account Suspended',
					};
				case 422:
					return {
						...state,
						login: null,
						error: true,
						errorMessages: 'ReCaptcha Error',
					};
				case 200:
					return { ...state, login: null, error: true, errorMessages: null };
				default:
					return {
						...state,
						login: action.value,
						error: false,
						errorMessages: null,
					};
			}
		// return { ...state, login: action.value === 401 || action.value === 403 || action.value === 200 ||action.value ===422 ? null : action.value, errorMessages: action.value === 401 ? "Wrong email or password" : "Unauthorized / Account Suspended", error: action.value === 401 || action.value === 403 ? true : false};
		case actionTypes.REMOVE_LOGIN_ERROR:
			return { ...state, error: false, errorMessages: null, login: null };
		case actionTypes.LOGOUT:
			return { ...state, login: null, error: false };
		case actionTypes.SIGNUP:
			return { ...state, signup: action.value, error: false };
		case actionTypes.CLEAR_SIGNUP:
			return { ...state, signup: null, error: false };
		case actionTypes.LOADER:
			return { ...state, loading: action.value };
		default:
			return state;
	}
};

export default authReducer;
