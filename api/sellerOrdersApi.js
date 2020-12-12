// import axios from "axios";
import { apiUrl, authAxios } from '../src/config/config';

export async function sellerOrders() {
	try {
		const sellerId = localStorage.getItem('user_id');
		return await authAxios.post(apiUrl + `order/seller/orders/${sellerId}`, {
			page: 0,
			limit: 5,
		});
	} catch (error) {}
}

export async function updateShipmentStatus(id, data) {
	try {
		return await authAxios.post(
			apiUrl + `order/seller/updateorders/${id}`,
			data
		);
	} catch (error) {}
}
