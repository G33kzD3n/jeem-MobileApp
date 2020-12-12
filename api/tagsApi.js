// import axios from "axios";
import { apiUrl, authAxios } from '../src/config/config';

export async function tags(data) {
	try {
		const sellerId = localStorage.getItem('user_id');
		return await authAxios.post(apiUrl + `sellertags/${sellerId}`, data);
	} catch (error) {
		console.error(error);
	}
}

export async function singleTag(id) {
	try {
		return await authAxios.get(apiUrl + `tag/${id}`);
	} catch (error) {
		console.error(error);
	}
}

export async function deleteTag(id) {
	try {
		return await authAxios.post(apiUrl + `tag/${id}`);
	} catch (error) {
		return error;
	}
}

export async function addTag(data) {
	try {
		return await authAxios.post(apiUrl + 'tag', data);
	} catch (error) {
		console.error(error);
	}
}

export async function updateTag(id, data) {
	try {
		return await authAxios.post(apiUrl + `tag/${id}`, data);
	} catch (error) {
		console.error(error);
	}
}
