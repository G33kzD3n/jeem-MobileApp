import React from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableWithoutFeedback
} from 'react-native';
import colors from '../../config/colors';
import AppText from './AppText';
import { useNavigation } from '@react-navigation/native';
import { apiUrlImageProducts } from '../../config/config';
import i18n from '../../languages/i18n';

const ProductCard = ({ item }) => {
	const navigation = useNavigation();
	const displayProduct = id => {
		// console.log(item,'>>>>>>>>>>>>>>>>>>>>>');
		navigation.navigate('ProductDetails', { id });
	};
	return (
		<TouchableWithoutFeedback onPress={() => displayProduct(item.id)}>
			<View style={styles.parent}>
				<Image
					source={{
						uri:
							apiUrlImageProducts +
							item.productName +
							'-' +
							item.productSku +
							'/' +
							item.productImages
					}}
					style={styles.image}
				/>
				<View style={styles.dataContainer}>
					<AppText style={styles.heading} numberOfLines={1}>
						{item.productName}
					</AppText>
					<AppText style={styles.subHeading} numberOfLines={1}>
						{item.productAddInfo}
					</AppText>
					<AppText style={styles.mainPrice}>
						{i18n.t('common.SAR')} {item.productDiscountedPrice}{' '}
						</AppText>
					<View style={styles.priceContainer}>
						<AppText style={styles.orginalPrice}>{i18n.t('common.SAR')} {item.productPrice}</AppText>
						<AppText style={styles.discount}>
							{' '}
							{item.productDiscount}% {i18n.t('common.OFF')}
						</AppText>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ProductCard;

const styles = StyleSheet.create({
	dataContainer: {
		padding: 10
		//  justifyContent:'space-around'
	},
	discount: {
		color: 'red',
		textTransform: 'uppercase',
		fontSize: 9
	},
	orginalPrice: {
		color: colors.primary2,
		fontSize: 11,
		textDecorationLine: 'line-through'
	},
	mainPrice: {
		color: colors.primary1,
		fontSize: 14,
		fontWeight: 'bold'
	},
	priceContainer: {
		flexDirection: 'row',
	},
	subHeading: {
		color: colors.primary2,
		fontSize: 15,
		paddingBottom: 2
	},
	heading: {
		color: colors.primary1,
		fontSize: 18,
		fontWeight: 'bold',
		paddingBottom: 2
	},
	parent: {
		height: 290,
		borderRadius: 5,
		// borderColor: 'green',
		// borderWidth: 1,
		width: '100%',
		overflow: 'hidden',
		backgroundColor: 'white'
	},
	image: {
		height: 200,
		width: '100%'
	}
});
