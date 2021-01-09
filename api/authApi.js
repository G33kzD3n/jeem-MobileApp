import axios from 'axios';
import { apiUrl, authAxios } from '../src/config/config';

export default async function loginUser(data) {
	try {
		return await axios.post(apiUrl + 'login', data);
	} catch (error) {
		return error;
	}
}

export async function signupUser(data) {
	try {
		return await axios.post(apiUrl + 'register', data);
	} catch (error) {
		return 'Phone Number or Email already registered';
	}
}

export async function logOutUser() {
	try {
		return await authAxios.post(apiUrl + 'logout');
	} catch (error) {
		return error;
	}
}
