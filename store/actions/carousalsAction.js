import {
    carousals,
	singleCarousal,
	deleteCarousal,
	addCarousal,
	updateCarousal,
} from '../../api/carousalApi.js';

export const getCarousalsAction = (type, values) => {
	return async (dispatch) => {
		const response = await carousals(values);
		if (response.status === 200) {
			dispatch({ type: type, value: response.data });
		}
		else{
			dispatch({ type: type, value: null });
		}
		// dispatch({ type: UPDATE_TAG, value: { message: null } });
	};
};

export const getSingleCarousalAction = (type, value) => {
	return async (dispatch) => {
		const response = await singleCarousal(value);
		if (response.status === 200) {
			dispatch({
				type: type,
				value: response.data,
			});
		} else {
			dispatch({
				type: type,
				value: {
					message: 'Something went wrong',
				},
			});
		}
	};
};

export const deleteCarousalAction = (type, value ,callback ,error) => {
	return async (dispatch) => {
		const response = await deleteCarousal(value);
		if (response.status === 202) {
			callback(response.data);
		} else {
			error(response.error);
		}
	};
};

export const unsetSucessMessage = (type) => {
	return async (dispatch) => {
		dispatch({ type: type, value: null });
	};
};

export const addCarousalAction = (type, values) => {
	const sellerId = localStorage.getItem('user_id');
	var carousalFormdata = new FormData();

	carousalFormdata.append('heading', values.carouselHeading);
	carousalFormdata.append('subHeading', values.carouselSubHeading);
	carousalFormdata.append('image', values.carouselImage);
	carousalFormdata.append('sellerId', sellerId);

	return async (dispatch) => {
		const response = await addCarousal(carousalFormdata);
		if (response.status === 201) {
			const message = response.statusText;
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

export const updateCarousalAction = (type, values, carousal_id) => {
	const sellerId = localStorage.getItem('user_id');
	var carousalFormdata = new FormData();

	carousalFormdata.append('heading', values.carouselHeading);
	carousalFormdata.append('subHeading', values.carouselSubHeading);
	carousalFormdata.append('image', values.carouselImage);
	carousalFormdata.append('sellerId', sellerId);
	carousalFormdata.append('_method', 'PUT');

	return async (dispatch) => {
		const response = await updateCarousal(carousal_id, carousalFormdata);
		if (response.status === 200) {
			const message = 'Carousal Updated Sucessfully';
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
					message: 'Something went wrong',
				},
			});
		}
	};
};
