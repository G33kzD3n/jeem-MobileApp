import loginUser, {
	signupUser,
	logOutUser,
	forgotPassword
} from '../../api/authApi';
import { updateUserProfile } from '../../api/profileApi';
import persistStore from '../../src/utils/persistStore';
// import { toast } from 'react-toastify';
import { LOADER } from './actionTypes.js';

export const signupAction = (type, values) => {
	return async dispatch => {
		const data = await signupUser(values);
		if (data === 'Phone Number or Email already registered') {
			dispatch({ type: type, value: data });
		} else {
			dispatch({ type: type, value: data.data.message });
		}
	};
};

export const loginAction = (type, values) => {
	return async dispatch => {
		dispatch({ type: LOADER, value: true });
		const data = await loginUser(values);
		if(data.status === 200 && data.data.role.role!=="Buyer"){
			dispatch({ type: type, value: 'sellerAccount' });
		}
	  else if (data.status === 200) {
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

export const removeLoginErrorAction = type => {
	return async dispatch => {
		dispatch({ type: type });
	};
};

export const emptySignupAction = type => {
	return async dispatch => {
		dispatch({ type: type });
	};
};

export const logoutAction = type => {
	return async dispatch => {
		const data = await logOutUser();
		if (data.status === 200) {
			persistStore.removeDetails('token');
			persistStore.removeDetails('userDetails');
			dispatch({ type: type });
			dispatch({ type: 'RESET_CART_AFTER_LOGOUT' });
		}
	};
};

export const updateProfileAction = (type, values) => {
	return async dispatch => {
		const data = await updateUserProfile(values);
		if (data.status === 200) {
			dispatch({ type: type, value: data.data[0] });
		}
	};
};

export const forgotPasswordAction = (type, values) => {
	return async dispatch => {
		const data = await forgotPassword(values);
		if (data.status === 200) {
			dispatch({ type: type, value: 200 });
		} else {
			dispatch({ type: type, value: 422 });
		}
	};
};
