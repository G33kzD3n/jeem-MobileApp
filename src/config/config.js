// import axios from "axios";

// const apiUrl = "http://localhost:8000/api/";
// const apiUrlImage = "http://localhost:8000/storage/images/";

// const config = {
//   baseURL: apiUrl,
//   headers: { Authorization: `Bearer ${localStorage.getItem("user_token")}` },
// };
// const authAxios = axios.create(config);

// export { apiUrl, apiUrlImage, authAxios };

import axios from 'axios';
import persistStore from '../utils/persistStore';

// const apiUrl = 'http://localhost:8000/api/';
// const apiUrlImage = 'http://localhost:8000/storage/images/';
// const apiUrlImageStatic = 'http://localhost:8000/storage/images/static/';
// const apiUrlImageProducts = 'http://localhost:8000/storage/images/products/';

const apiUrl = 'http://jeem-backend.brorinfotech.com/api/';
const apiUrlImage =
	'http://jeem-backend.brorinfotech.com/public/storage/images/';
const apiUrlImageStatic =
	'http://jeem-backend.brorinfotech.com/public/storage/images/static/';
const apiUrlImageProducts =
	'http://jeem-backend.brorinfotech.com/public/storage/images/products/';
const apiUrlImageCarousels =
	'http://jeem-backend.brorinfotech.com/public/storage/images/carousels/';

const config = {
	baseURL: apiUrl,
};

const authAxios = axios.create(config);

//get token

authAxios.interceptors.request.use(async function (config) {
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
	authAxios,
};
