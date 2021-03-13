import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import AppCarousel from '../../common/components/AppCarousel';
import AppScreen from '../../common/components/AppScreen';
import colors from '../../config/colors';
import AppText from '../../common/components/AppText';
import AppButton from '../../common/components/AppButton';
import TextCard from '../../common/components/TextCard';
import Ratings from '../../common/components/Ratings';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import {
	addProductsToCartAction,
	getProductReviews,
	singleProductAction
} from '../../../store/actions';
import {
	ADD_PRODUCT_TO_CART,
	ADD_PRODUCT_TO_CART_ERROR,
	GET_REVIEWS_OF_PRODUCT,
	GET_SINGLE_PRODUCT_FOR_BUYER
} from '../../../store/actions/actionTypes';
import Loader from '../../common/components/Loader';
import appAlert from '../../common/components/appAlert';
import Reviews from '../../common/components/Reviews';
import i18n from '../../languages/i18n';

const ProductView = ({ route }) => {
	const navigation = useNavigation();
	const { id } = route.params;
	const currentLanguage = useSelector(state => state.profile.language);
	const flexDirection=currentLanguage==='ar'?{flexDirection:'row-reverse'}:{flexDirection:'row'}
	const textAlign=currentLanguage==='ar'?{textAlign:'right'}:{textAlign:'left'}
	const productData = useSelector(state => state.home.singleProduct);
	const reviews = useSelector(state => state.product.reviews);
	const cartMessage = useSelector(state => state.cart.message);
	const token = useSelector(
		state => state.auth.login && state.auth.login.token.access_token
	);

	const addToCart = () => {
		if (token) {
			dispatch(addProductsToCartAction(ADD_PRODUCT_TO_CART, id));
		} else {
			appAlert(
				i18n.t('productView.Warning'),
				i18n.t('productView.Please login first and try again')
			);
		}
		// navigation.navigate('Cart');
	};
	if (cartMessage) {
		appAlert(i18n.t('productView.Message'), cartMessage);
	}
	//console.log(productSubCategories);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(singleProductAction(GET_SINGLE_PRODUCT_FOR_BUYER, id)); //get called if the user refreshes the page to get data
		dispatch(getProductReviews(GET_REVIEWS_OF_PRODUCT, id));
		return () =>
			dispatch({ type: ADD_PRODUCT_TO_CART_ERROR, value: { message: null } });
	}, []);

	const handleSeller = product => {
		navigation.navigate('SellerProduct', {
			name: product.productSellerName,
			id: product.productSellerId,
			apiName: 'Seller'
			// total: undefined,
		}); //navigate with params
	};

	if (!productData) return <Loader />;
	return (
		<AppScreen>
			<ScrollView style={{ backgroundColor: colors.primaryShade24 }}>
				<AppCarousel
					height={styles.carouselHeight}
					data={productData.productImagesMobile}
				/>
				<View style={{ backgroundColor: colors.white, marginBottom: 8 }}>
					<View style={styles.dataContainer}>
						<AppText style={[styles.heading,textAlign]}>
							{productData.productName}
							<AppText style={styles.subHeading}>
								{' '}
								{productData.productAddInfo}
							</AppText>
						</AppText>

						<View style={flexDirection}>
							<AppText style={styles.mainPrice}>
							{i18n.t('common.SAR')} {productData.productDiscountedPrice}{' '}
							</AppText>
							<AppText style={styles.orginalPrice}>
							{i18n.t('common.SAR')} {productData.productPrice}
							</AppText>
							<AppText style={styles.discount}>
								{' '}
								({productData.productDiscount}% {i18n.t('productView.OFF')})
							</AppText>
						</View>

						<AppText style={[styles.taxesMessage,textAlign]}>
							{i18n.t('productView.inclusive of all taxes')}
						</AppText>
						<TouchableOpacity
							style={[styles.priceContainer,flexDirection]}
							onPress={() => handleSeller(productData)}
						>
							<AppText style={{ color: colors.primary2, fontSize: 16 }}>
								{i18n.t('productView.Seller:')}
								<AppText
									style={{
										color: colors.primary1,
										fontSize: 15,
										alignSelf: 'center'
									}}
								>
									{' '}
									{productData.productSellerName}
								</AppText>
							</AppText>
						</TouchableOpacity>
					</View>
				</View>
				<TextCard
					heading={i18n.t('productView.Product Details')}
					details={productData.productCartDesc}
				/>
				<Ratings
					ratings={productData.ratings}
					totalReviews={productData.totalReviews}
				/>
				{reviews && reviews.length !== 0 && <Reviews reviews={reviews} />}
			</ScrollView>
			<View style={styles.appButton}>
				<AppButton
					color1={colors.primaryShade11}
					color2={colors.primaryShade13}
					text={i18n.t('productView.Add To Cart')}
					borderRadius={3}
					textColor={colors.white}
					handleClick={() => addToCart()}
					textTransform="uppercase"
				/>
			</View>
		</AppScreen>
	);
};

export default ProductView;

const styles = StyleSheet.create({
	appButton: {
		padding: 5,
		backgroundColor: colors.white
	},
	taxesMessage: {
		color: 'green',
		fontSize: 15
	},
	carouselHeight: {
		height: 550
		// height:'80%',
		// flex:1
	},
	dataContainer: {
		padding: 10,
		paddingBottom: 5,
		flex: 1,
		//  justifyContent:'space-around'
	},
	discount: {
		color: 'red',
		textTransform: 'uppercase',
		fontSize: 15
	},
	orginalPrice: {
		color: colors.primary2,
		fontSize: 15,
		textDecorationLine: 'line-through'
	},
	mainPrice: {
		color: colors.primary1,
		fontSize: 18,
		fontWeight: 'bold'
	},
	// priceContainer: {
	// 	flexDirection: 'row'
	// 	// alignItems:'center'
	// },
	subHeading: {
		color: colors.primary2,
		fontSize: 16,
		paddingBottom: 2
	},
	heading: {
		color: colors.primary1,
		fontSize: 18,
		fontWeight: 'bold',
		paddingBottom: 2
	}
	// parent: {
	//     height: 290,
	//     borderRadius: 5,
	//     // borderColor: 'green',
	//     // borderWidth: 1,
	//     width: '100%',
	//     overflow: 'hidden',
	//     backgroundColor:'white'
	// },
	// image: {
	//     height: 200,
	//     width: '100%',

	// }
});
