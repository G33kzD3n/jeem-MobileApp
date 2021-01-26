import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppPicker from '../../../common/components/AppPicker';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';
import i18n from '../../../languages/i18n';

const pickerItems = [
	{ value: 1, label: i18n.t('cart.1') },
	{ value: 2, label: i18n.t('cart.2') },
	{ value: 3, label: i18n.t('cart.3') },
	{ value: 4, label: i18n.t('cart.4') },
	{ value: 5, label: i18n.t('cart.5') },
	{ value: 6, label: i18n.t('cart.6') }, 
	{ value: 7, label: i18n.t('cart.7') },
	{ value: 8, label: i18n.t('cart.8') }
];
const ProductDetails = ({ data, onQuantityChange }) => {
	// const [selectedItem, setSelectedItem] = useState(data.productQuantity);
	// console.log(selectedItem,);

	return (
		<>
			<AppText style={styles.heading}>{data.productName}</AppText>
			<AppText style={styles.subHeading} numberOfLines={3}>
				{data.productCartDesc}
			</AppText>

			{/* <AppText style={styles.taxesMessage}>inclusive of all taxes</AppText> */}
			<View style={styles.priceContainer}>
				<AppText style={{ color: colors.primary2, fontSize: 12 }}>
					{i18n.t('cart.Sold by')}:
				</AppText>
				<AppText
					style={{
						color: colors.primary1,
						fontSize: 12,
						alignSelf: 'center'
					}}
				>
					{data.productSellerName}
				</AppText>
			</View>
			<View style={styles.picker}>
				<AppPicker
					icon="chevron-down"
					placeholder={i18n.t('cart.Quantity')}
					item={pickerItems}
					selectedItem={data.productQuantity}
					onQuantityChange={value => onQuantityChange(value, data.id)}
					horizontal={true}
					pickerStyle={styles.itemPicker}
				/>
			</View>
			<View style={styles.priceContainer}>
				<AppText style={styles.mainPrice}>
					SAR {data.productDiscountedPrice * data.productQuantity}{' '}
				</AppText>
				<AppText style={styles.orginalPrice}>
					SAR {data.productPrice * data.productQuantity}
				</AppText>
				<AppText style={styles.discount}>
					{' '}
					({data.productDiscount}% {i18n.t('cart.Off')})
				</AppText>
			</View>
		</>
	);
};
export default ProductDetails;

const styles = StyleSheet.create({
	itemPicker: {
		borderColor: colors.primary1,
		borderWidth: 1,
		borderRadius: 25,
		width: 50,
		height: 50,
		justifyContent: 'center',
		flex: 1,
		margin: 5,
		marginBottom: 10
	},
	picker: {
		marginTop: '10%',
		backgroundColor: colors.primaryShade24,
		alignSelf: 'flex-start',
		padding: 3,
		marginBottom: '3%'
	},
	heading: {
		color: colors.primary1,
		fontSize: 18,
		fontWeight: 'bold',
		paddingBottom: 2
	},
	subHeading: {
		color: colors.primary2,
		fontSize: 16,
		paddingBottom: 2
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
	priceContainer: {
		flexDirection: 'row'
		// alignItems:'center'
	},
	taxesMessage: {
		color: 'green',
		fontSize: 15
	}
});
