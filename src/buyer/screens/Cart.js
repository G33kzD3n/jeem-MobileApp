import React, { useRef } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AppScreen from '../../common/components/AppScreen';
import colors from '../../config/colors';
import AppText from '../../common/components/AppText';

import PlaceOrderBar from '../components/CartPageComponents/PlaceOrderBar';
import CartImage from '../components/CartPageComponents/CartImage';
import ProductDetails from '../components/CartPageComponents/ProductDetails';
import ProductButtons from '../components/CartPageComponents/ProductButtons';
import PriceDetails from '../components/CartPageComponents/PriceDetails';
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

const Cart = () => {
	const scrollViewRef = useRef();
	return (
		<AppScreen>
			<PlaceOrderBar scrollViewRef={scrollViewRef} />
			<ScrollView style={styles.scroll} ref={scrollViewRef}>
				{data.map((items, index) => (
					<React.Fragment key={index}>
						<View style={styles.topContainer}>
							<View style={styles.cartImage}>
								<CartImage image={items.image[0]} />
							</View>
							<View style={styles.dataContainer}>
								<ProductDetails data={items} />
							</View>
						</View>
						<ProductButtons />
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
		marginBottom: 1,
		flexDirection: 'row',
		flex: 1,
		height: 200,
		borderColor: 'red',
		padding: 10,
		justifyContent: 'space-evenly',
	},
	carouselHeight: {
		height: 550,
		// height:'80%',
		// flex:1
	},
	cartImage: {
		flex: 1,
		paddingRight: 10,
	},
	dataContainer: {
		// paddingBottom: 5,
		flex: 2,
		//  justifyContent:'space-around'
	},
});
