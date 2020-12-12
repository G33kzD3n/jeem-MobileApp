import {
	dashboardStats,
	getSellerProfileApi,
	updateSellerProfileApi,
} from '../../api/sellerDashboardApi.js';

export const getDashboardStats = (type) => {
	return async (dispatch) => {
		const response = await dashboardStats();
		if (response.status === 200) {
			dispatch({
				type: type,
				value: {
					seller_stats: response.data,
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

export const getSellerProfileAction = (type) => {
	return async (dispatch) => {
		const response = await getSellerProfileApi();
		if (response.status === 200) {
			dispatch({
				type: type,
				value: {
					seller_profile: response.data,
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

export const updateSellerProfileAction = (type, values) => {
	const userId = localStorage.getItem('user_id');

	var profileFormData = new FormData();

	profileFormData.append('name', values.name);
	profileFormData.append('email', values.email);
	profileFormData.append('phonenumber', values.phonenumber);
	profileFormData.append('country', values.country);
	profileFormData.append('state', values.state);
	profileFormData.append('pincode', values.pincode);
	profileFormData.append('address', values.address);
	profileFormData.append('city', values.city);
	profileFormData.append('seller_category_name', values.seller_category_name);
	profileFormData.append('image', values.logo);
	profileFormData.append('userId', userId);
	profileFormData.append('_method', 'PUT');

	return async (dispatch) => {
		const response = await updateSellerProfileApi(profileFormData);
		if (response.status === 200) {
			// const message = response.statusText;
			dispatch({
				type: type,
				value: {
					update_response: response.statusText,
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
