import * as actionTypes from '../actions/actionTypes.js';

const initalState = {
	addresses: [],
	message: null,
};

const addressReducer = (state = initalState, action) => {
	switch (action.type) {
		case actionTypes.GET_ADDRESSES:
			return { ...state, addresses: action.value };
		case actionTypes.DELETE_ADDRESS:
			return {
				...state,
				addresses: state.addresses.filter((item) => {
					return item.id !== action.id;
				}),
			};
		case actionTypes.ADD_ADDRESS:
			return {
				...state,
				addresses: [action.value.address, ...state.addresses],
				message: action.value.message,
			};
		case actionTypes.REMOVE_ADDRESS_MESSAGE: {
			return {
				...state,
				message: null,
			};
		}
		default:
			return state;
	}
};

export default addressReducer;
