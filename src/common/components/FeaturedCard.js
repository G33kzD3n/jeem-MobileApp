import React from 'react';
import { StyleSheet,  View, Image } from 'react-native';
import AppText from './AppText';
import colors from '../../config/colors';

const FeaturedCard = ({ title, subTitle, brandLogo, image, sellerName }) => {
	return (
		<View style={styles.parent}>
			<View style={styles.brandImageContainer}>
				<Image
					style={styles.brandImage}
					resizeMode="contain"
					source={{ uri: brandLogo }}
				/>
				<AppText style={styles.subTitle}>{sellerName}</AppText>
			</View>
			<Image style={styles.image} source={{ uri: image }} />
			<View style={styles.textWrapper}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subTitle}>{subTitle}</AppText>
			</View>
		</View>
	);
};

export default FeaturedCard;

const styles = StyleSheet.create({
	parent: {
		borderWidth: 1,
		borderColor: colors.primaryShade21,
		// width: '50%',
		// height: '57%',
		backgroundColor: colors.white,
		borderRadius: 0
	},
	brandImageContainer: {
		
	},
	brandImage: {
		height: 45,
		width: '100%'
	},
	image: {
		height: 155,
		width: '100%'
	},
	brand: {
		fontSize: 13,
		color: colors.primary2,
		paddingTop: 2,
		textDecorationLine: 'underline'
	},
	title: {
		color: colors.primary2,
		fontWeight: 'bold',
		paddingTop: 8,
		fontSize: 20,
		textAlign: 'center'
	},
	subTitle: {
		color: colors.primaryShade21,
		fontSize: 11,
		paddingBottom: 2,
		textAlign: 'center'
	}
});
