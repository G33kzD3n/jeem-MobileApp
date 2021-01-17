import { getAddresses, deleteAddress, addAddress, activeAddress } from '../../api/addressApi';

export const addressesAction = (type, id) => {
	return async (dispatch) => {
		const data = await getAddresses(id);
		dispatch({ type: type, value: data.data });
	};
};

export const activeAddressesAction = (type) => {
	return async (dispatch) => {
		const data = await activeAddress();
		dispatch({ type: type, value: data });
	};
};

export const deleteAddressAction = (type, id) => {
	// console.log(id)
	return async (dispatch) => {
		const data = await deleteAddress(id);
		if (data.message === 'Address deleted successfully') {
			dispatch({ type: type, id: id });
		}
	};
};

export const addAddressAction = (type, data) => {
	return async (dispatch) => {
		const response = await addAddress(data);
		if (response.status === 200 && response.data.message==='Address saved') { //adding new addresss
			dispatch({
				type: type,
				value: {
					address: response.data.address, 
					message: response.data.message,
				},
			});
		}else{ //updating current address
			dispatch({
				type: type,
				value: {
					address: response.data.selectedAddress, 
					message: response.data.message,
				},
			});
		}
	};
};
