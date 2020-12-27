// import axios from "axios";
import { apiUrl, authAxios } from '../src/config/config';

export async function getCartItems() {
	try {
		const response = await authAxios.get(apiUrl + 'order/get-orders-from-cart');
		return response.data;
	} catch (error) {
		console.log(error, 'resssssssssssssss');
	}
}

export async function removeCartItem(id) {
	try {
		const response = await authAxios.delete(
			apiUrl + 'order/remove-from-cart/' + id
		);
		return response.data;
	} catch (error) {}
}

export async function getCartCount() {
	try {
		const response = await authAxios.get(apiUrl + 'order/buyer/count');
		return response.data;
	} catch (error) {
		if (error.response.status === 404) {
		}
	}
}
export async function placeOrder() {
	try {
		const response = await authAxios.post(apiUrl + 'order/buyer/orders');
		return response.data;
	} catch (error) {}
}

export async function addProductToCart(data) {
	try {
		const response = await authAxios.post(apiUrl + 'order/add-to-cart/' + data);
		if (response.status === 201) {
			return response.data;
		}
	} catch (error) {
		if (error.response.status === 409) {
			return error.response.data;
		}
	}
}

export async function changeProductQuan(quantity, productId) {
	try {
		const response = await authAxios.post(
			apiUrl + 'order/add-to-cart/' + productId,
			{ quantity: quantity }
		);
		if (response.status === 201) {
			return response;
		}
	} catch (error) {
		if (error.response.status === 409) {
			return error.response.data;
		}
	}
}

export async function reviewOrder(data, id) {
	try {
		const response = await authAxios.get(apiUrl + 'order/buyer/review');
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		if (error.response.status === 409) {
			return error.response.data;
		}
	}
}
