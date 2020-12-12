import { apiUrl, authAxios } from '../src/config/config';

export async function dashboardStats() {
	try {
		const sellerId = localStorage.getItem('user_id');
		return await authAxios.get(apiUrl + `getsellerdashboarddata/${sellerId}`);
	} catch (error) {}
}

export async function getSellerProfileApi() {
	try {
		const sellerId = localStorage.getItem('user_id');

		return await authAxios.get(apiUrl + `seller/${sellerId}`);
	} catch (error) {}
}

export async function updateSellerProfileApi(data) {
	try {
		const sellerId = localStorage.getItem('user_id');

		return await authAxios.post(apiUrl + `seller/${sellerId}`, data);
	} catch (error) {}
}
