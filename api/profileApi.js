import axios from 'axios';
import { apiUrl, authAxios } from '../src/config/config';

export default async function profileGet(data) {
	try {
		return await authAxios.get(apiUrl + 'buyer/profile', data);
	} catch (error) {
		console.error('Error in profile', error);
	}
}

export async function profileSet(data) {
	try {
		return await authAxios.post(apiUrl + 'buyer/profile', data);
	} catch (error) {
		console.error('Error in profile', error);
	}
}

export async function updateUserProfile(data) {
	try {
		return await authAxios.post(apiUrl + 'buyer?_method=PUT', data);
	} catch (error) {
		console.error('Error in profile', error);
	}
}
