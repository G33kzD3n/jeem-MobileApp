import { getAddresses, deleteAddress, addAddress } from '../../api/addressApi';

export const addressesAction = (type, id) => {
	return async (dispatch) => {
		const data = await getAddresses(id);
		dispatch({ type: type, value: data.data });
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
		if (response.status === 200) {
			dispatch({
				type: type,
				value: {
					address: response.data.address,
					message: response.data.message,
				},
			});
		}
	};
};
