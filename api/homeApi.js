import axios from 'axios';
import { apiUrl, authAxios } from '../src/config/config';

export async function getCarousel() {
	try {
		return await axios.get(apiUrl + 'carousel');
	} catch (error) {}
}

export async function getTagsForBuyer() {
	try {
		return await axios.get(apiUrl + 'tags');
	} catch (error) {}
}

export async function getTagsProductForBuyer(id, page, limit) {
	try {
		return await axios.post(apiUrl + `tag/products/${id}`, {
			page: page,
			limit: limit,
		});
	} catch (error) {}
}

export async function getSellerProductForBuyer(id, page, limit) {
	try {
		return await axios.post(apiUrl + `seller/products/${id}`, {
			page: page,
			limit: limit,
		});
	} catch (error) {}
}

export async function getSellerCategory() {
	try {
		return await axios.get(apiUrl + 'sellercategory');
	} catch (error) {}
}

export async function getProductCategory(val) {
	try {
		return await axios.get(apiUrl + `productcategories/${val}`);
	} catch (error) {}
}

export async function getProductSubCategory(val) {
	try {
		return await axios.get(apiUrl + `productsubcategories/${val}`);
	} catch (error) {}
}

export async function getProducts(id, page, limit) {
	try {
		return await axios.post(apiUrl + `products/${id}`, {
			page: page,
			limit: limit,
		});
	} catch (error) {}
}
export async function getProduct(val) {
	try {
		return await axios.get(apiUrl + `product/${val}`);
	} catch (error) {}
}

export async function getAllTagsWithProducts(data) {
	try {
		const response = await axios.get(apiUrl + 'order/buyer/getalltags');
		return response.data;
	} catch (error) {}
}

export async function searchProduct(data) {
	try {
		const response = await axios.post(
			apiUrl + 'order/buyer/searchproducts',
			data
		);
		return response.data;
	} catch (error) {}
}

export async function productCategories() {
	try {
		return await axios.get(apiUrl + 'productcategories');
	} catch (error) {}
}

export async function productSubCategories() {
	try {
		return await axios.get(apiUrl + 'productsubcategories');
	} catch (error) {}
}

export async function myOrders() {
	try {
		return await authAxios.get(apiUrl + 'order/buyer/myorders');
	} catch (error) {
		console.log(error.response);
	}
}

export async function cancelOrder(id) {
	try {
		return await authAxios.post(apiUrl + `order/buyer/cancelorder/${id}`);
	} catch (error) {}
}

export async function helpQuery(data) {
	try {
		return await axios.post(apiUrl + `contactus`, data);
	} catch (error) {
		console.log(error);
	}
}