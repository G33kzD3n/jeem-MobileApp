import * as actionTypes from '../actions/actionTypes';

const initalState = {
	products: null,
	productCategories: null,
};

const productsReducer = (state = initalState, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS:
			return { ...state, products: action.value };

		case actionTypes.DELETE_PRODUCT:
			return {
				...state,
				delete_response: action.value.message,
				products: action.value.productData,
			};
			case actionTypes.GET_REVIEWS_OF_PRODUCT:
				return {
					...state,
					reviews: action.value,
				};
				case actionTypes.ADD_REVIEWS_OF_PRODUCT:
					return {
						...state,
						reviewResponse: action.value,
					};
					case actionTypes.REMOVE_REVIEWS_OF_PRODUCT:
						return {
							...state,
							reviewResponse: null,
						};

				case actionTypes.CLEAN_REVIEWS_OF_PRODUCT:
			return {
				...state,
				reviews: null,
			};
		case actionTypes.ADD_PRODUCT:
			return {
				...state,
				addProduct_response: action.value.message,
			};

		case actionTypes.UPDATE_PRODUCT:
			return {
				...state,
				updateProduct_response: action.value.message,
			};
		case actionTypes.ERROR_RESPONSE:
			return {
				...state,
				error_response: action.value.message,
			};
		case actionTypes.GET_PRODCUTCATEGORY:
			return {
				...state,
				productCategoriesData: action.value,
			};
		case actionTypes.GET_PRODUCTSUBCATEGORY:
			return {
				...state,
				productSubCategoriesData: action.value,
			};
		case actionTypes.UN_SET_ERROR_RESPONSE:
			return {
				...state,
				error_response: action.value,
			};
		case actionTypes.GET_SELLER_PRODUCT_CATEGORY:
			return {
				...state,
				productCategories: action.value.productCategoryData,
			};
		case actionTypes.SUCCESS_TAG:
			// console.log(action.value);
			if (action.value === 'delete_response') {
				return {
					...state,
					delete_response: null,
				};
			} else {
				return {
					...state,
					addProduct_response: null,
				};
			}
		default:
			return state;
	}
};

export default productsReducer;
