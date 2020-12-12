import { apiUrl, authAxios } from '../src/config/config';

export async function carousals(data) {
	try {
		const sellerId = localStorage.getItem('user_id');
		return await authAxios.post(apiUrl + `sellercarousels/${sellerId}`, data);
	} catch (error) {
		console.error(error);
	}
}

export async function singleCarousal(id) {
	try {
		return await authAxios.get(apiUrl + `carousel/${id}`);
	} catch (error) {
		console.error(error);
	}
}

export async function deleteCarousal(id) {
	try {
		return await authAxios.post(apiUrl + `carousel/${id}`);
	} catch (error) {
		return error;
		console.error(error);
	}
}

export async function addCarousal(data) {
	try {
		return await authAxios.post(apiUrl + 'carousel', data);
	} catch (error) {
		console.error(error);
	}
}

export async function updateCarousal(id, data) {
	try {
		return await authAxios.post(apiUrl + `carousel/${id}`, data);
	} catch (error) {
		console.error(error);
	}
}
