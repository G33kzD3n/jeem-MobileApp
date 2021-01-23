import { apiUrl, authAxios } from '../src/config/config';

export async function getAddresses() {
	try {
		const response = await authAxios.get(apiUrl + 'order/buyer/addresses');
		return response.data;
	} catch (error) {}
}

export async function deleteAddress(id) {
	try {
		const response = await authAxios.delete(
			apiUrl + 'order/buyer/addresses/' + id
		);
		return response.data;
	} catch (error) {}
}
export async function activeAddress() {
	try {
		const response = await authAxios.get(apiUrl + 'order/buyer/activeaddress');
		return response.data;
	} catch (error) {}
}

export async function addAddress(data) {
	try {
		const response = await authAxios.post(
			apiUrl + 'order/buyer/addresses',
			data
		);
		return response;
	} catch (error) {}
}
