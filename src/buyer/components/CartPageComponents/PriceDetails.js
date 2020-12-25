import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';

const PriceDetails = ({ priceDetails, totalItems }) => {
	return (
		<View style={styles.topContainer}>
			<View style={styles.headingContainer}>
				<AppText style={styles.textHeading}>Price Details</AppText>
				<AppText style={styles.subHeading}> {`(${totalItems} item)`}</AppText>
			</View>
			<View style={styles.headingDetails}>
				<AppText style={styles.textSubDetails}>Total MRP</AppText>
				<AppText style={styles.subHeadingPrice}>
					${priceDetails.totalPrice}
				</AppText>
			</View>
			<View style={styles.headingDetails}>
				<AppText style={styles.textSubDetails}>Discount on MRP</AppText>
				<AppText style={[styles.subHeadingPrice, { color: 'green' }]}>
					{priceDetails.totalDiscountPercentage}%
				</AppText>
			</View>
			<View style={styles.bottomDetails}>
				<AppText style={styles.textHeading}>Total Amount</AppText>
				<AppText style={styles.subHeading}>
					${priceDetails.totalDiscountPrice}
				</AppText>
			</View>
		</View>
	);
};

export default PriceDetails;

const styles = StyleSheet.create({
	subHeadingPrice: {
		fontSize: 14,
		color: colors.primary1,
	},
	textSubDetails: {
		fontSize: 14,
		color: colors.primary1,
		textTransform: 'uppercase',
	},
	bottomDetails: {
		flexDirection: 'row',
		paddingVertical: 16,
		borderTopColor: colors.primaryShade24,
		borderTopWidth: 0.7,
		justifyContent: 'space-between',
	},
	headingDetails: {
		flexDirection: 'row',
		paddingVertical: 12,
		justifyContent: 'space-between',
	},
	topContainer: {
		backgroundColor: colors.white,
		paddingHorizontal: 10,
	},
	subHeading: {
		color: colors.primary1,
		fontSize: 16,
		fontWeight: 'bold',
		// borderColor:'red',
		// borderWidth:2
	},
	headingContainer: {
		flexDirection: 'row',
		paddingVertical: 12,
		borderBottomColor: colors.primaryShade24,
		borderBottomWidth: 0.7,
	},
	textHeading: {
		color: colors.primary1,
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
});
