// import axios from "axios";
import { apiUrl, authAxios } from '../src/config/config';

export async function products(data) {
	try {
		const sellerId = localStorage.getItem('user_id');
		return await authAxios.post(apiUrl + `sellerproducts/${sellerId}`, data);
	} catch (error) {
		console.error(error);
	}
}

export async function deleteProduct(id) {
	try {
		return await authAxios.post(apiUrl + `product/${id}`);
	} catch (error) {}
}

export async function addProduct(data) {
	try {
		// return
		return await authAxios.post(apiUrl + 'product', data);
	} catch (error) {
		return error.response;
	}
}

export async function updateProduct(data, id) {
	try {
		return await authAxios.post(apiUrl + `product/${id}`, data);
	} catch (error) {}
}

export async function productCategory() {
	let pagination = { page: 0, limit: 20 };
	try {
		return await authAxios.post(apiUrl + `productsubcategories`, pagination);
	} catch (error) {}
}

export async function productReviews(id) {
	try {
		// return
		return await authAxios.get(apiUrl + `review/${id}`);
	} catch (error) {
		return error.response;
	}
}

export async function addReview(id,data) {
	try {
		return await authAxios.post(apiUrl + `review/${id}?_method=PUT`, data);
	} catch (error) {
		console.error('Error in review', error);
	}
}