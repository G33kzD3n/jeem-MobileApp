import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
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
	singleProductAction,
} from '../../../store/actions';
import {
	ADD_PRODUCT_TO_CART,
	ADD_PRODUCT_TO_CART_ERROR,
	GET_SINGLE_PRODUCT_FOR_BUYER,
} from '../../../store/actions/actionTypes';
import Loader from '../../common/components/Loader';
import appAlert from '../../common/components/appAlert';

const ProductView = ({ route }) => {
	const navigation = useNavigation();
	const { id } = route.params;

	const productData = useSelector((state) => state.home.singleProduct);
  // console.log(productData)
	const cartMessage = useSelector((state) => state.cart.message);

	const addToCart = () => {
		dispatch(addProductsToCartAction(ADD_PRODUCT_TO_CART, id));
		// navigation.navigate('Cart');
	};
	if (cartMessage) {
		appAlert('Message', cartMessage);
	}
	//console.log(productSubCategories);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(singleProductAction(GET_SINGLE_PRODUCT_FOR_BUYER, id)); //get called if the user refreshes the page to get data
		return () =>
			dispatch({ type: ADD_PRODUCT_TO_CART_ERROR, value: { message: null } });
	}, []);

	const handleSeller=(product)=>{
		navigation.navigate('SellerProduct', {
			name: product.productSellerName,
			id: product.productSellerId,
			apiName: 'Seller',
			// total: undefined,
		}); //navigate with params
	}

	// console.log(id, '>>>>>>>>>>>>>>>>>>>>>>>>', productData);
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
						<AppText style={styles.heading}>
							{productData.productName}
							<AppText style={styles.subHeading}>
								{' '}
								{productData.productAddInfo}
							</AppText>
						</AppText>

						<View style={styles.priceContainer}>
							<AppText style={styles.mainPrice}>
								${productData.productDiscountedPrice}{' '}
							</AppText>
							<AppText style={styles.orginalPrice}>
								${productData.productPrice}
							</AppText>
							<AppText style={styles.discount}>
								{' '}
								({productData.productDiscount}% OFF)
							</AppText>
						</View>

						<AppText style={styles.taxesMessage}>
							inclusive of all taxes
						</AppText>
						<TouchableOpacity style={styles.priceContainer} onPress={()=>handleSeller(productData)}>
	
							<AppText style={{ color: colors.primary2, fontSize: 16 }}>
								Seller:
							</AppText>
							<AppText
								style={{
									color: colors.primary1,
									fontSize: 15,
									alignSelf: 'center',
								}}
							>
								{' '}
								{productData.productSellerName}
							</AppText>
						</TouchableOpacity>
					</View>
				</View>
				<TextCard
					heading={'Product Details'}
					details={productData.productCartDesc}
				/>
				<Ratings ratings={productData.ratings} />
			</ScrollView>
			<View style={styles.appButton}>
				<AppButton
					color1={colors.primaryShade11}
					color2={colors.primaryShade13}
					text="Add To Cart"
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
		backgroundColor: colors.white,
	},
	taxesMessage: {
		color: 'green',
		fontSize: 15,
	},
	carouselHeight: {
		height: 550,
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
		fontSize: 15,
	},
	orginalPrice: {
		color: colors.primary2,
		fontSize: 15,
		textDecorationLine: 'line-through',
	},
	mainPrice: {
		color: colors.primary1,
		fontSize: 18,
		fontWeight: 'bold',
	},
	priceContainer: {
		flexDirection: 'row',
		// alignItems:'center'
	},
	subHeading: {
		color: colors.primary2,
		fontSize: 16,
		paddingBottom: 2,
	},
	heading: {
		color: colors.primary1,
		fontSize: 18,
		fontWeight: 'bold',
		paddingBottom: 2,
	},
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
