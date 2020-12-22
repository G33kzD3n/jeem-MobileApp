import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import colors from '../../config/colors';
import { useSelector, useDispatch } from 'react-redux';

import PlaceOrderBar from '../components/CartPageComponents/PlaceOrderBar';
import CartImage from '../components/CartPageComponents/CartImage';
import ProductDetails from '../components/CartPageComponents/ProductDetails';
import ProductButtons from '../components/CartPageComponents/ProductButtons';
import PriceDetails from '../components/CartPageComponents/PriceDetails';
import AppScreen from '../../common/components/AppScreen';
import NotFound from './NotFound';
import { cartAction } from '../../../store/actions';
import { GET_CART_ITEMS } from '../../../store/actions/actionTypes';
import Loader from '../../common/components/Loader';
const data = [
	{
		image: [
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
		],
		title: 'DressBerry',
		subTitle: 'Colors for only you',
		details:
			'Best Product in the market to buy and amazing deals only for you. You will not regret it. Best in the market only for you. Best Product in the market to buy and amazing deals only for you. You will not regret it.',
		price: 679,
		orginalPrice: 1049,
		discount: 60,
		seller: 'Jeem Solutions',
	},
	{
		image: [
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
		],
		title: 'DressBerry',
		subTitle: 'Colors for only you',
		price: 679,
		details:
			'Best Product in the market to buy and amazing deals only for you. You will not regret it. Best in the market only for you. Best Product in the market to buy and amazing deals only for you. You will not regret it.',
		orginalPrice: 1049,
		discount: 60,
		seller: 'Jeem Solutions',
	},
	{
		image: [
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
		],
		title: 'DressBerry',
		subTitle: 'Colors for only you',
		price: 679,
		details:
			'Best Product in the market to buy and amazing deals only for you. You will not regret it. Best in the market only for you. Best Product in the market to buy and amazing deals only for you. You will not regret it.',
		orginalPrice: 1049,
		discount: 60,
		seller: 'Jeem Solutions',
	},
	{
		image: [
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
		],
		title: 'DressBerry',
		subTitle: 'Colors for only you',
		price: 679,
		details:
			'Best Product in the market to buy and amazing deals only for you. You will not regret it. Best in the market only for you. Best Product in the market to buy and amazing deals only for you. You will not regret it.',
		orginalPrice: 1049,
		discount: 60,
		seller: 'Jeem Solutions',
	},
	{
		image: [
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
		],
		title: 'DressBerry',
		subTitle: 'Colors for only you',
		price: 679,
		details:
			'Best Product in the market to buy and amazing deals only for you. You will not regret it. Best in the market only for you. Best Product in the market to buy and amazing deals only for you. You will not regret it.',
		orginalPrice: 1049,
		discount: 60,
		seller: 'Jeem Solutions',
	},
	{
		image: [
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
		],
		title: 'DressBerry',
		subTitle: 'Colors for only you',
		price: 679,
		details:
			'Best Product in the market to buy and amazing deals only for you. You will not regret it. Best in the market only for you. Best Product in the market to buy and amazing deals only for you. You will not regret it.',
		orginalPrice: 1049,
		discount: 60,
		seller: 'Jeem Solutions',
	},
	{
		image: [
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
		],
		title: 'DressBerry',
		subTitle: 'Colors for only you',
		price: 679,
		details:
			'Best Product in the market to buy and amazing deals only for you. You will not regret it. Best in the market only for you. Best Product in the market to buy and amazing deals only for you. You will not regret it.',
		orginalPrice: 1049,
		discount: 60,
		seller: 'Jeem Solutions',
	},
	{
		image: [
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
		],
		title: 'DressBerry',
		subTitle: 'Colors for only you',
		price: 679,
		details:
			'Best Product in the market to buy and amazing deals only for you. You will not regret it. Best in the market only for you. Best Product in the market to buy and amazing deals only for you. You will not regret it.',
		orginalPrice: 1049,
		discount: 60,
		seller: 'Jeem Solutions',
	},
	{
		image: [
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
		],
		title: 'DressBerry',
		subTitle: 'Colors for only you',
		price: 679,
		details:
			'Best Product in the market to buy and amazing deals only for you. You will not regret it. Best in the market only for you. Best Product in the market to buy and amazing deals only for you. You will not regret it.',
		orginalPrice: 1049,
		discount: 60,
		seller: 'Jeem Solutions',
	},
	{
		image: [
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
			'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
		],
		title: 'DressBerry',
		subTitle: 'Colors for only you',
		price: 679,
		details:
			'Best Product in the market to buy and amazing deals only for you. You will not regret it. Best in the market only for you. Best Product in the market to buy and amazing deals only for you. You will not regret it.',
		orginalPrice: 1049,
		discount: 60,
		seller: 'Jeem Solutions',
	},
];

const Cart = ({ navigation }) => {
	const scrollViewRef = useRef();
	const token = useSelector(
		(state) => state.auth.login && state.auth.login.token.access_token
	);

	const cartItems = useSelector((state) => state.cart.cartItems);

	console.log(cartItems, 'cartItemmmmmmmmmm');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(cartAction(GET_CART_ITEMS));
	}, []);

	const handleAuth = () => {
		navigation.navigate('Login');
	};
	if (!token) {
		return <NotFound name="LOG IN/SIGN UP" onClick={handleAuth} />;
	}
	if (!cartItems)
		//means data not yet retreived
		return <Loader />;
	return (
		<AppScreen>
			<PlaceOrderBar
				scrollViewRef={scrollViewRef}
				navigationAddress="SelectAddress"
				total={1024}
				text="PLACE ORDER"
			/>
			<ScrollView style={styles.scroll} ref={scrollViewRef}>
				{cartItems.map((items, index) => (
					<React.Fragment key={index}>
						<View style={styles.topContainer}>
							<View style={styles.cartImage}>
								<CartImage image={items.productImages[0]} />
							</View>
							<View style={styles.dataContainer}>
								<ProductDetails data={items} />
							</View>
						</View>
						<View
							style={{
								borderTopColor: colors.primaryShade23,
								borderTopWidth: 0.5,
							}}
						>
							<ProductButtons />
						</View>
					</React.Fragment>
				))}
				<PriceDetails />
			</ScrollView>
		</AppScreen>
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
