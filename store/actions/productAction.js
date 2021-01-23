import { productCategories, productSubCategories } from '../../api/homeApi.js';
import {
	products,
	deleteProduct,
	addProduct,
	updateProduct,
	productCategory,
	productReviews,
	addReview,
} from '../../api/productApi.js';


export const productCategoriesAction = (type) => {
	return async (dispatch) => {
		const response = await productCategories();
		if (response.status === 200) {
			dispatch({ type: type, value: response.data });
		} else {
			dispatch({ type: type, value: null });
		}
	};
};

export const productSubCategoriesAction = (type) => {
	return async (dispatch) => {
		const response = await productSubCategories();
		if (response.status === 200) {
			dispatch({ type: type, value: response.data });
		} else {
			dispatch({ type: type, value: null });
		}
	};
};

export const getProductReviews = (type, id) => {
	return async (dispatch) => {
			const data = await productReviews(id);
			if (data.status === 200) {
				dispatch({ type: type, value: data.data });
			}
	};
};

export const addProductReviews = (type, id, val) => {
	return async (dispatch) => {
			const data = await addReview(id,val);
			if (data.status === 200) {
				dispatch({ type: type, value: data.data });
			}
	};
};

export const unSetErrorResponseAction = (type, values) => {
	return async (dispatch) => {
		dispatch({ type: type, value: null });
	};
};

export const unsetProductSucessMessage = (type, value) => {
	// console.log(type, value);
	return async (dispatch) => {
		dispatch({ type: type, value: value });
	};
};

