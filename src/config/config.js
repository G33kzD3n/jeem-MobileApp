import axios from 'axios';
import persistStore from '../utils/persistStore';

// const apiUrl = 'http://localhost:8000/api/';
// const apiUrlImage = 'http://localhost:8000/storage/images/';
// const apiUrlImageStatic = 'http://localhost:8000/storage/images/static/';
// const apiUrlImageProducts = 'http://localhost:8000/storage/images/products/';

const apiUrl = 'https://jeem-backend.jeemsolutions.com.sa/api/';
const apiUrlImage =
	'https://jeem-backend.jeemsolutions.com.sa/public/storage/images/';
const apiUrlImageStatic =
	'https://jeem-backend.jeemsolutions.com.sa/public/storage/images/static/';
const apiUrlImageProducts =
	'https://jeem-backend.jeemsolutions.com.sa/public/storage/images/products/';
const apiUrlImageCarousels =
	'https://jeem-backend.jeemsolutions.com.sa/public/storage/images/carousels/';

const config = {
	baseURL: apiUrl
};

const authAxios = axios.create(config);

//get token

authAxios.interceptors.request.use(async function(config) {
	const token = await persistStore.getDetails('token');
	config.headers.Authorization = token ? `Bearer ${token}` : ``;
	return config;
});

export {
	apiUrl,
	apiUrlImageProducts,
	apiUrlImage,
	apiUrlImageStatic,
	apiUrlImageCarousels,
	authAxios
};
