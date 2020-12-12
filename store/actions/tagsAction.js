import {
	tags,
	singleTag,
	deleteTag,
	addTag,
	updateTag,
} from '../../api/tagsApi.js';
// import { SUCCESS_TAG, UPDATE_TAG } from './actionTypes.js';

export const getTagsAction = (type, values) => {
	return async (dispatch) => {
		const response = await tags(values);
		if (response.status === 200) {
			dispatch({ type: type, value: response.data });
		}
		else{
			dispatch({ type: type, value: null });
		}
		// dispatch({ type: UPDATE_TAG, value: { message: null } });
	};
};

export const getSingleTagAction = (type, value) => {
	return async (dispatch) => {
		const response = await singleTag(value);
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
		// dispatch({ type: type, value: data.data });
	};
};

export const deleteTagsAction = (type, value ,callback ,error) => {
	return async (dispatch) => {
		const response = await deleteTag(value);
		// const message = response.data.message;
		if (response.status === 202) {
			callback(response.data);
			// const data = await tags();
			// dispatch({
			// 	type: type,
			// 	value: {
			// 		tagsData: data.data,
			// 	},
			// });
			// dispatch({ type: SUCCESS_TAG, value: message });
		} else {
			// const data = await tags();
			// dispatch({
			// 	type: type,
			// 	value: {
			// 		tagsData: data.data,
			// 	},
			// });
			error(response.error);
			// dispatch({ type: SUCCESS_TAG, value: message });
		}
	};
};

export const unsetSucessMessage = (type) => {
	return async (dispatch) => {
		dispatch({ type: type, value: null });
	};
};

export const addTagAction = (type, values) => {
	const sellerId = localStorage.getItem('user_id');

	var tagFormData = new FormData();

	// productFormData.set(values);
	// Object.keys(values).map((key) => {
	//   return productFormData.append(key, values[key]);
	// });

	tagFormData.append('name', values.tagName);
	tagFormData.append('image', values.tagImage);
	tagFormData.append('sellerId', sellerId);

	return async (dispatch) => {
		const response = await addTag(tagFormData);
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

export const updateTagsAction = (type, values, tag_id) => {
	const sellerId = localStorage.getItem('user_id');
	
	var tagFormData = new FormData();

	// tagFormData.set(values);
	// Object.keys(values).map((key) => {
	//   return tagFormData.append(key, values[key]);
	// });

	tagFormData.append('name', values.tagName);
	tagFormData.append('image', values.tagImage);
	tagFormData.append('sellerId', sellerId);
	tagFormData.append('_method', 'PUT');

	return async (dispatch) => {
		const response = await updateTag(tag_id, tagFormData);
		if (response.status === 200) {
			const message = 'Tag Updated Sucessfully';
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

// export const getProductTagsAction = (type) => {
// 	return async (dispatch) => {
// 		const data = await tags();
// 		dispatch({ type: type, value: data.data });
// 		dispatch({ type: UPDATE_TAG, value: { message: null } });
// 	};
// };
