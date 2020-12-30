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
			let tempAddresses=[...state.addresses];
			let updatedAddress;
			if(action.value.message==='Address saved'){ //when we add new address
			tempAddresses=[...state.addresses];
			updatedAddress=tempAddresses.map(data=> {return {...data,isActive:data.isActive=0}})
			updatedAddress=[action.value.address, ...updatedAddress]
			}else{
				updatedAddress=tempAddresses.map(data=> { //when we update new address
					if(data.id!==action.value.address.id){
					return {...data,isActive:data.isActive=0}
					}else{
					return {...data,isActive:data.isActive=1}
					}})
			}
			return {
				...state,
				addresses: [...updatedAddress],
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
