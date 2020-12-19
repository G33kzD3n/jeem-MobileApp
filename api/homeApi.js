import axios from 'axios';
import { apiUrl } from '../src/config/config';

export async function getCarousel() {
	try {
		return await axios.get(apiUrl + 'carousel');
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

export async function getProducts(val) {
	try {
		return await axios.get(apiUrl + `products/${val}`);
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
		const response = await axios.post(apiUrl + 'order/buyer/search', {
			searchItem: data,
		});
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
