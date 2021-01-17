import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import colors from '../../config/colors';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import PlaceOrderBar from '../components/CartPageComponents/PlaceOrderBar';
import CartImage from '../components/CartPageComponents/CartImage';
import ProductDetails from '../components/CartPageComponents/ProductDetails';
import ProductButtons from '../components/CartPageComponents/ProductButtons';
import PriceDetails from '../components/CartPageComponents/PriceDetails';
import AppScreen from '../../common/components/AppScreen';
import NotFound from './NotFound';
import {
	cartAction,
	changeProductQuantity,
	removeCartAction,
} from '../../../store/actions';
import {
	CHANGE_QUANTITY,
	GET_CART_ITEMS,
	PRICE_DETAILS,
	REMOVE_CART_ITEM,
} from '../../../store/actions/actionTypes';
import Loader from '../../common/components/Loader';
import appAlert from '../../common/components/appAlert';
import i18n from '../../languages/i18n';

const Cart = ({ navigation }) => {
	const isFocused = useIsFocused();
	const scrollViewRef = useRef();
	const [loading, setLoading] = useState(false);
	const [priceDetails, setPriceDetails] = useState();
	const token = useSelector(
		(state) => state.auth.login && state.auth.login.token.access_token
	);

	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(cartAction(GET_CART_ITEMS));
		setLoading(true);
	}, [isFocused]);

	//stop Loader
	useEffect(() => {
		if (cartItems && cartItems!=='Token is Expired') {
			//calculate total items
			// console.log(cartItems, 'calculate total items');
			let total = cartItems.reduce(
				(accumltor, currentValue) => {
					accumltor.totalPrice +=
						currentValue.productPrice * currentValue.productQuantity;
					accumltor.totalDiscountPrice +=
						currentValue.productDiscountedPrice * currentValue.productQuantity;
					accumltor.totalDiscountPercentage += currentValue.productDiscount;
					return accumltor;
				},
				{ totalPrice: 0, totalDiscountPrice: 0, totalDiscountPercentage: 0 }
			);
			setPriceDetails(total);
			dispatch({type:PRICE_DETAILS,value:{priceDetails:total,totalItem:cartItems.length}});
			//means if the cartitems change stop loading
			setLoading(false);
		}
	}, [cartItems]);

	const handleAuth = () => {
		navigation.navigate('Login');
	};

	const handleOk = (id) => {
		dispatch(removeCartAction(REMOVE_CART_ITEM, id));
		setLoading(true);
	};

	const handleRemove = (id) => {
		appAlert(i18n.t('cart.DELETE'), i18n.t('cart.Are you sure you want to remove item from cart?'), () =>
			handleOk(id)
		);
	};

	const onQuantityChange = (value, id) => {
		dispatch(changeProductQuantity(CHANGE_QUANTITY, value, id));
		setLoading(true);
	};

	if (!token) {
		return <NotFound name={i18n.t('cart.LOG IN/SIGN UP')} onClick={handleAuth} />;
	}

	if (cartItems==='Token is Expired') {
		return <NotFound name={i18n.t('cart.Please logout and then login again')}/>;
	}

	if (!cartItems || !priceDetails)
		//means data not yet retreived
		return <Loader />;

	//handle no item in cart
	if (cartItems.length === 0) {
		return <NotFound name={i18n.t('cart.No Item in the cart')} />;
	}
	// console.log('Price Details in cart', priceDetails);
	return (
		<>
			{loading && <Loader />}
			<AppScreen>
				<PlaceOrderBar
					scrollViewRef={scrollViewRef}
					navigationAddress="SelectAddress"
					// total={priceDetails.totalDiscountPrice}
					text={i18n.t('cart.PLACE ORDER')}
				/>
				<ScrollView style={styles.scroll} ref={scrollViewRef}>
					{cartItems.map((items, index) => (
						<React.Fragment key={index}>
							<View style={styles.topContainer}>
								<View style={styles.cartImage}>
									<CartImage image={items.productImages[0]} />
								</View>
								<View style={styles.dataContainer}>
									<ProductDetails
										data={items}
										onQuantityChange={onQuantityChange}
									/>
								</View>
							</View>
							<View
								style={{
									borderTopColor: colors.primaryShade23,
									borderTopWidth: 0.5,
								}}
							>
								<ProductButtons handleClick={() => handleRemove(items.id)} />
							</View>
						</React.Fragment>
					))}
					<PriceDetails
					/>
				</ScrollView>
			</AppScreen>
		</>
	);
};

export default Cart;

const styles = StyleSheet.create({
	scroll: {
		backgroundColor: colors.primaryShade24,
	},
	topContainer: {
		backgroundColor: colors.white,
		marginTop: 8,
		flexDirection: 'row',
		flex: 1,
		height: 200,
		borderColor: 'red',
		padding: 10,
		justifyContent: 'space-evenly',
	},
	cartImage: {
		flex: 1,
		paddingRight: 10,
		width: 50,
	},

	dataContainer: {
		// paddingBottom: 5,
		flex: 2,
		//  justifyContent:'space-around'
	},
});
