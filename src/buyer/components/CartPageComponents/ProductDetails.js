import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppPicker from '../../../common/components/AppPicker';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';

const pickerItems = [
	{ value: 1, label: 1 },
	{ value: 2, label: 2 },
	{ value: 3, label: 3 },
	{ value: 4, label: 4 },
	{ value: 5, label: 5 },
	{ value: 6, label: 6 },
	{ value: 7, label: 7 },
	{ value: 8, label: 8 },
];
const ProductDetails = ({ data }) => {
	const [selectedItem, onSelectedItem] = useState(1);
	return (
		<>
			<AppText style={styles.heading}>{data.title}</AppText>
			<AppText style={styles.subHeading}>{data.subTitle}</AppText>

			{/* <AppText style={styles.taxesMessage}>inclusive of all taxes</AppText> */}
			<View style={styles.priceContainer}>
				<AppText style={{ color: colors.primary2, fontSize: 12 }}>
					Sold by:
				</AppText>
				<AppText
					style={{
						color: colors.primary1,
						fontSize: 12,
						alignSelf: 'center',
					}}
				>
					{' '}
					{data.seller}
				</AppText>
			</View>
			<View style={styles.picker}>
				<AppPicker
					icon="chevron-down"
					placeholder="Quantity"
					item={pickerItems}
					selectedItem={selectedItem}
					onSelectedItem={onSelectedItem}
					horizontal={true}
					pickerStyle={styles.itemPicker}
				/>
			</View>
			<View style={styles.priceContainer}>
				<AppText style={styles.mainPrice}>${data.price} </AppText>
				<AppText style={styles.orginalPrice}>${data.orginalPrice}</AppText>
				<AppText style={styles.discount}> ({data.discount}% OFF)</AppText>
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
		marginBottom: 10,
	},
	picker: {
		marginTop: '10%',
		backgroundColor: colors.primaryShade24,
		alignSelf: 'flex-start',
		padding: 3,
		marginBottom: '3%',
	},
	heading: {
		color: colors.primary1,
		fontSize: 18,
		fontWeight: 'bold',
		paddingBottom: 2,
	},
	subHeading: {
		color: colors.primary2,
		fontSize: 16,
		paddingBottom: 2,
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
	taxesMessage: {
		color: 'green',
		fontSize: 15,
	},
});
