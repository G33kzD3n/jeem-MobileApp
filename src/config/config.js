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

// const apiUrl = 'http://localhost:8000/api/';
// const apiUrlImage = 'http://localhost:8000/storage/images/';
// const apiUrlImageStatic = 'http://localhost:8000/storage/images/static/';
// const apiUrlImageProducts = 'http://localhost:8000/storage/images/products/';

const apiUrl = 'http://jeem-backend.brorinfotech.com/api/';
const apiUrlImage = 'http://jeem-backend.brorinfotech.com/public/storage/images/';
const apiUrlImageStatic = 'http://jeem-backend.brorinfotech.com/public/storage/images/static/';
const apiUrlImageProducts = 'http://jeem-backend.brorinfotech.com/public/storage/images/products/';
const apiUrlImageCarousels = 'http://jeem-backend.brorinfotech.com/public/storage/images/carousels/';

const reacaptchaSiteKeyV3="6LdGZ_QZAAAAAAr-CvPT71l7LYXaEX27etvWBzeT";
const reacaptchaSecretKeyV3="6LdGZ_QZAAAAAJDJxvAi3mCM4gST3wpE1cwu5uUT";

const reacaptchaSiteKeyV2="6LdiN_UZAAAAAIwyMTx493Ko_pGWWRJrpOZdPwn7";
const reacaptchaSecretKeyV2="6LdiN_UZAAAAAOdqW_1-ruZ4BqpBKo54ln4grJ6H";

const config = {
	baseURL: apiUrl,
};

const authAxios = axios.create(config);

authAxios.interceptors.request.use(function (config) {
	config.headers.Authorization = localStorage.getItem('user_token')
		? `Bearer ${localStorage.getItem('user_token')}`
		: ``;
	return config;
});

export { apiUrl, apiUrlImageProducts, apiUrlImage,apiUrlImageStatic,apiUrlImageCarousels, authAxios, reacaptchaSiteKeyV2,reacaptchaSiteKeyV3 ,reacaptchaSecretKeyV2, reacaptchaSecretKeyV3};
