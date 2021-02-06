import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';
import { useSelector } from 'react-redux';
import i18n from '../../../languages/i18n';

const PriceDetails = () => {
	const priceDetails = useSelector(state => state.cart.priceDetails);
	const totalItems = useSelector(state => state.cart.totalItem);
	return (
		<View style={styles.topContainer}>
			<View style={styles.headingContainer}>
				<AppText style={styles.textHeading}>
					{i18n.t('cart.Price Details')}
				</AppText>
				<AppText style={styles.subHeading}> {`(${totalItems} item)`}</AppText>
			</View>
			<View style={styles.headingDetails}>
				<AppText style={styles.textSubDetails}>
					{i18n.t('cart.Total MRP')}
				</AppText>
				<AppText style={styles.subHeadingPrice}>
					SAR {priceDetails.totalPrice}
				</AppText>
			</View>
			<View style={styles.headingDetails}>
				<AppText style={styles.textSubDetails}>
					{i18n.t('cart.Discount on MRP')}
				</AppText>
				<AppText style={[styles.subHeadingPrice, { color: 'green' }]}>
					{priceDetails.totalDiscountPercentage}%
				</AppText>
			</View>
			<View style={styles.bottomDetails}>
				<AppText style={styles.textHeading}>
					{i18n.t('cart.Total Amount')}
				</AppText>
				<AppText style={styles.subHeading}>
					SAR {priceDetails.totalDiscountPrice.toFixed(2)}
				</AppText>
			</View>
		</View>
	);
};

export default PriceDetails;

const styles = StyleSheet.create({
	subHeadingPrice: {
		fontSize: 14,
		color: colors.primary1
	},
	textSubDetails: {
		fontSize: 14,
		color: colors.primary1,
		textTransform: 'uppercase'
	},
	bottomDetails: {
		flexDirection: 'row',
		paddingVertical: 16,
		borderTopColor: colors.primaryShade24,
		borderTopWidth: 0.7,
		justifyContent: 'space-between'
	},
	headingDetails: {
		flexDirection: 'row',
		paddingVertical: 12,
		justifyContent: 'space-between'
	},
	topContainer: {
		backgroundColor: colors.white,
		paddingHorizontal: 10
	},
	subHeading: {
		color: colors.primary1,
		fontSize: 16,
		fontWeight: 'bold'
		// borderColor:'red',
		// borderWidth:2
	},
	headingContainer: {
		flexDirection: 'row',
		paddingVertical: 12,
		borderBottomColor: colors.primaryShade24,
		borderBottomWidth: 0.7
	},
	textHeading: {
		color: colors.primary1,
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	}
});
