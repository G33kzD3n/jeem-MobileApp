import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import orderssReducer from './ordersReducer';
import carousalReducer from './carousalReducer';
import homeReducer from './homeReducer';
import cartReducer from './cartReducer';
import profileReducer from './profileReducer';
import addressReducer from './addressReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	product: productsReducer,
	order: orderssReducer,
	carousal: carousalReducer,
	home: homeReducer,
	cart: cartReducer,
	profile: profileReducer,
	address: addressReducer
});

export default rootReducer;
