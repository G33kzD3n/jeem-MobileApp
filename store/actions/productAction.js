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

export const getProductsAction = (type, values) => {
	return async (dispatch) => {
		const response = await products(values);
		if (response.status === 200) {
			dispatch({ type: type, value: response.data });
		} else {
			dispatch({ type: type, value: null });
		}
	};
};

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

export const deleteProductAction = (type, value, pagination_data) => {
	return async (dispatch) => {
		const response = await deleteProduct(value);
		if (response.status === 202) {
			const message = response.data.message;
			const data = await products(pagination_data);
			dispatch({
				type: type,
				value: {
					productData: data.data,
					message: message,
				},
			});
		} else {
			const data = await products(pagination_data);
			dispatch({
				type: type,
				value: {
					productData: data.data,
					message: null,
				},
			});
		}
	};
};

export const addProductsAction = (type, values) => {
	const sellerId = localStorage.getItem('user_id');
	var productFormData = new FormData();

	// productFormData.set(values);
	// Object.keys(values).map((key) => {
	//   return productFormData.append(key, values[key]);
	// });
	productFormData.append('name', values.name);
	productFormData.append('addInfo', values.addInfo);
	productFormData.append('stock', values.stock);
	productFormData.append('productSubCategoryId', values.productSubCategoryId);
	// productFormData.append("arrayimages", values.arrayimages);
	productFormData.append('price', values.price);
	productFormData.append('techSpecs', values.techSpecs);
	productFormData.append('cartDesc', values.cartDesc);
	productFormData.append('tags', values.productTags);
	productFormData.append('carouselId', values.productCarousals);
	productFormData.append('discountedPrice', values.productDiscountedPrice);
	productFormData.append('sellerId', sellerId);

	if (values.arrayimages !== null) {
		Array.from(values.arrayimages).forEach((f) => {
			productFormData.append('arrayimages[]', f);
		});

		return async (dispatch) => {
			const response = await addProduct(productFormData);
			if (response.status === 201) {
				const message = response.statusText;
				dispatch({
					type: type,
					value: {
						message: message,
					},
				});
			} else if (response.status === 400) {
				let issue = JSON.parse(response.data);
				let str = '';
				for (const [key, value] of Object.entries(issue)) {
					str += `${key}: ${value}`;
				}
				dispatch({
					type: 'ERROR_RESPONSE',
					value: {
						message: str,
					},
				});
			}
		};
	} else {
		// toast.error("Upload at least one image for a product");
		return async (dispatch) => {
			dispatch({
				type: 'ERROR_RESPONSE',
				value: {
					message: 'Upload at least one image for a product',
				},
			});
		};
	}
};

export const updateProductsAction = (type, prod_id, values) => {
	const sellerID = localStorage.getItem('user_id');
	var productFormData = new FormData();

	productFormData.append('name', values.name);
	productFormData.append('addInfo', values.addInfo);
	productFormData.append('stock', values.stock);
	productFormData.append('productSubCategoryId', values.productSubCategoryId);
	// productFormData.append("arrayimages", values.arrayimages);
	productFormData.append('price', values.price);
	productFormData.append('techSpecs', values.techSpecs);
	productFormData.append('cartDesc', values.cartDesc);
	productFormData.append('tags', values.productTags);
	productFormData.append('carousals', values.productCarousals);
	productFormData.append('discountedPrice', values.productDiscountedPrice);
	productFormData.append('sellerId', sellerID);
	productFormData.append('_method', 'PUT');
	if (values.arrayimages !== null) {
		Array.from(values.arrayimages).forEach((f) => {
			productFormData.append('arrayimages[]', f);
		});
	}

	return async (dispatch) => {
		const response = await updateProduct(productFormData, prod_id);

		if (response.status === 200) {
			const message = 'Product Updated Sucessfully';
			dispatch({
				type: type,
				value: {
					message: message,
				},
			});
		} else {
			dispatch({
				type: type,
				value: {
					message: null,
				},
			});
		}
	};
};

export const getProductCategoryAction = (type) => {
	return async (dispatch) => {
		const response = await productCategory();
		if (response.status === 200) {
			dispatch({
				type: type,
				value: {
					productCategoryData: response.data,
				},
			});
		} else {
			dispatch({
				type: type,
				value: {
					productData: {},
				},
			});
		}
	};
};

// export const updateProductsActionMessage = (type, message) => {
//   dispatch({
//     type: type,
//     value: {
//       message: message,
//     },
//   });
// };
