import * as SecureStore from 'expo-secure-store';

// const key = 'token';
// const user = 'userDetails'
const storeDetails = async (key, details) => {
	try {
		await SecureStore.setItemAsync(key, details);
	} catch (error) {
		console.log('Error storing Details', error);
	}
};

const getDetails = async (key) => {
	try {
		return await SecureStore.getItemAsync(key);
	} catch (error) {
		console.log('Error getting Details', error);
	}
};

const removeDetails = async (key) => {
	try {
		await SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log('Error removing Details', error);
	}
};

export default { storeDetails, getDetails, removeDetails };
