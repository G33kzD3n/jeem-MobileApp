import { getCartItems } from '../../api/cartApi';
import { removeCartItem } from '../../api/cartApi';
import { getCartCount } from '../../api/cartApi';
import { addProductToCart } from '../../api/cartApi.js';
import { changeProductQuan } from '../../api/cartApi.js';
import { placeOrder } from '../../api/cartApi.js';
import { reviewOrder } from '../../api/cartApi.js';
import { ADD_PRODUCT_TO_CART_ERROR } from './actionTypes';
// import { toast } from "react-toastify";

export const cartAction = (type) => {
	return async (dispatch) => {
		const data = await getCartItems();
		if (data !== undefined) {
			dispatch({ type: type, value: data });
		}
	};
};

export const removeCartAction = (type, id) => {
	return async (dispatch) => {
		const data = await removeCartItem(id);
		if (data.message === 'Product removed from cart') {
			dispatch({ type: type, id: id, count: data.count });
		}
	};
};

export const getCartCountAction = (type) => {
	return async (dispatch) => {
		const data = await getCartCount();
		dispatch({ type: type, value: data });
	};
};

export const addProductsToCartAction = (type, values) => {
	return async (dispatch) => {
		const data = await addProductToCart(values);
		if (data.message !== 'Product updated in cart') {
			// console.log('Added to Cart');
			dispatch({
				type: type,
				value: { count: data.count, message: 'Added to Cart' },
			});
		} else {
			// console.log('Already in Cart');
			dispatch({
				type: ADD_PRODUCT_TO_CART_ERROR,
				value: { message: 'Already in Cart' },
			});
		}
	};
};

export const changeProductQuantity = (type, values, id) => {
	// console.log(values, id)
	return async (dispatch) => {
		const data = await changeProductQuan(values, id);
		if (data.status === 201) {
			dispatch({ type: type, quan: values, id: id });
		}
	};
};

export const placeOrderAction = (type) => {
	return async (dispatch) => {
		const data = await placeOrder();
		if (data.result === 'success') {
			dispatch({ type: type, value: data.data.order_code });
		}
	};
};

export const reviewOrderAction = (type) => {
	return async (dispatch) => {
		const data = await reviewOrder();
		if (data.result === 'success') {
			dispatch({ type: type, value: data.order });
		}
	};
};
