import loginUser, { signupUser, logOutUser } from '../../api/authApi';
// import { toast } from 'react-toastify';
import { LOADER } from './actionTypes.js';

export const signupAction = (type, values) => {
	return async (dispatch) => {
		const data = await signupUser(values);
		dispatch({ type: type, value: data.data.user });
	};
};

export const loginAction = (type, values) => {
	return async (dispatch) => {
		dispatch({ type: LOADER, value: true });
		const data = await loginUser(values);
		if (data.status === 200) {
			// localStorage.setItem('user_token', data.data.token.access_token);
			// localStorage.setItem('user_type', data.data.role.role);
			// localStorage.setItem('user_id', data.data.user.id);
			dispatch({ type: type, value: data.data });
		} else if (data.response.status === 401) {
			dispatch({ type: type, value: 401 });
		} else if (data.response.status === 403) {
			dispatch({ type: type, value: 403 });
		} else if (data.response.status === 422) {
			dispatch({ type: type, value: 422 });
		}
		dispatch({ type: LOADER, value: false });
	};
};

export const removeLoginErrorAction = (type) => {
	return async (dispatch) => {
		dispatch({ type: type });
	};
};

export const emptySignupAction = (type) => {
	return async (dispatch) => {
		dispatch({ type: type });
	};
};

export const logoutAction = (type) => {
	return async (dispatch) => {
		const data = await logOutUser();
		if (data.status === 200) {
			dispatch({ type: type });
			dispatch({ type: 'RESET_CART_AFTER_LOGOUT' });
		}
	};
};
