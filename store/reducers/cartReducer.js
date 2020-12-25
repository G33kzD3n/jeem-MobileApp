import * as actionTypes from '../actions/actionTypes.js';

const initalState = {
	cartItems: null,
	error: true,
	count: null,
	// message: "No Items in Cart",
	successCart: null,
	errorCart: null,
	orderCode: null,
	reviewData: null,
};

const cartReducer = (state = initalState, action) => {
	switch (action.type) {
		case actionTypes.GET_CART_ITEMS:
			return {
				...state,
				cartItems: action.value.orders,
				error: false,
				count: action.value.count,
				orderCode: null,
			};
		case actionTypes.REMOVE_CART_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter((item) => {
					return item.id !== action.id;
				}),
				count: action.count,
			};
		case actionTypes.ADD_PRODUCT_TO_CART:
			return {
				...state,
				successCart: true,
				count: action.value.count,
				message: action.value.message,
			};
		case actionTypes.ADD_PRODUCT_TO_CART_ERROR:
			return {
				...state,
				errorCart: true,
				message: action.value.message,
			};
		case actionTypes.GET_COUNT:
			return { ...state, count: action.value };
		case actionTypes.CHANGE_QUANTITY:
			return {
				...state,
				cartItems: state.cartItems.map((item) => {
					return item.id === action.id
						? {
								...item,
								productQuantity: action.quan,
						  }
						: { ...item };
				}),
			};
		case actionTypes.RESET_CART_AFTER_LOGOUT:
			return { ...state, count: 0, cartItems: null };
		case actionTypes.PLACE_ORDER:
			return { ...state, orderCode: action.value, cartItems: null };
		case actionTypes.REVIEW_ORDER:
			return { ...state, reviewData: action.value };
		default:
			return state;
	}
};

export default cartReducer;
