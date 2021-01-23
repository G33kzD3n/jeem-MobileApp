import React, { useRef, useEffect } from 'react';
import {
	Text,
	View,
	Dimensions,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json
import { useSelector, useDispatch } from 'react-redux';
import { scrollInterpolator, animatedStyles } from '../../../utils/animation';
import ComponentHeading from '../../../common/components/ComponentHeading';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';
import { FEATURED_PRODUCTS } from '../../../../store/actions/actionTypes';
import { getTagsProductAction } from '../../../../store/actions/homeAction';
import { apiUrlImageProducts } from '../../../config/config';
import i18n from '../../../languages/i18n';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * (3 / 4));

const FeatureProducts = () => {
	let carouselRef = useRef(null);
	const navigation = useNavigation(); 
	const handleClick = () => {
		navigation.navigate('SubCategoryProduct', {
			name:i18n.t('homeScreen.Featured Products'),
			id: 4,
			apiName: 'Tag',
			totalItems: undefined,
		}); //navigate with params
	};

	const featuredProducts = useSelector((state) => state.home.featuredProducts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			getTagsProductAction(FEATURED_PRODUCTS, { id: 4, page: 0, limit: 6 })
		);
	}, []);

	const productView = (id) => {
		navigation.navigate('ProductDetails', { id });
	};

	if (!featuredProducts) return <></>;
	// console.log(featuredProducts, '>>>>>>>>>');

	function _renderItem({ item }) {
		return (
			<TouchableOpacity
				onPress={() => productView(item.id)}
				style={styles.touchOpacity}
			>
				<>
				<ImageBackground
					source={{
						uri:
							apiUrlImageProducts +
							item.productName +
							'-' +
							item.productSku +
							'/' +
							item.productImages[0],
					}}
					style={styles.itemContainer}
				>
					<View style={{ padding: 50 }}>
						<AppText style={{ fontSize: 30, color: colors.primary1,fontWeight:'bold' }}>
							{item.productName}
						</AppText>
						<AppText style={{ color: colors.white }}>
							{item.productAddInfo}
						</AppText>
					</View>
				</ImageBackground>
				</>
			</TouchableOpacity>
		);
	}

	return (
		<View>
			<ComponentHeading
				text={i18n.t('homeScreen.Featured Products')}
				more={featuredProducts.totalRecords > 6 && i18n.t('homeScreen.View More')}
				onPress={() => handleClick()}
			/>
			<Carousel
				ref={(carousel) => (carouselRef = carousel)}
				data={featuredProducts.data}
				renderItem={_renderItem}
				sliderWidth={SLIDER_WIDTH}
				itemWidth={ITEM_WIDTH}
				// containerCustomStyle={styles.carouselContainer}
				inactiveSlideShift={0}
				loop
				autoplay
				// enableSnap={false}
				//   onSnapToItem={(index) => ({ index })}
				scrollInterpolator={scrollInterpolator}
				slideInterpolatedStyle={animatedStyles}
				useScrollView={true}
			/>
			{/* <Text style={styles.counter}
        >
          {this.state.index}
        </Text> */}
		</View>
	);
};
export default FeatureProducts;

const styles = StyleSheet.create({
	itemContainer: {
		width: ITEM_WIDTH,
		height: ITEM_HEIGHT,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		borderRadius: 10,
	},
	itemLabel: {
		color: 'white',
		fontSize: 24,
	},
	counter: {
		marginTop: 25,
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
