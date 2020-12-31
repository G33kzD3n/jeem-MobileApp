import * as actionTypes from '../actions/actionTypes';

const initalState = {
	carousel: null,
	sellerCategory: null,
	productCategory: null,
	productSubCategory: null,
	products: null,
	singleProduct: null,
	search: null,
	offers: null,
	allTags: null,
};

const homeReducer = (state = initalState, action) => {
	switch (action.type) {
		case actionTypes.CAROUSEL:
			return { ...state, carousel: action.value };
		case actionTypes.SELLER_CATEGORY:
			return { ...state, sellerCategory: action.value };
		case actionTypes.GET_PRODUCT_CATEGORY:
			return { ...state, productCategory: action.value };
		case actionTypes.GET_PRODUCT_SUB_CATEGORY:
			return { ...state, productSubCategory: action.value };
		case actionTypes.GET_PRODUCTS_FOR_BUYER:
			return { ...state, products: action.value };
		case actionTypes.REMOVE_PRODUCTS_FROM_STORE:
			return { ...state, products: null };
		case actionTypes.GET_SINGLE_PRODUCT_FOR_BUYER:
			return { ...state, singleProduct: action.value };
		case actionTypes.GET_OFFERS:
			return { ...state, offers: action.value, error: false };
		case actionTypes.GET_ALL_TAGS:
			return { ...state, allTags: action.value };
		case actionTypes.SEARCH:
			return { ...state, search: action.value, error: false };
		case actionTypes.CLEAR_SEARCH:
				return { ...state, search: null, error: false };
		default:
			return state;
	}
};

export default homeReducer;
