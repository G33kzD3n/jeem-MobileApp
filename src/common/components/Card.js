import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AppText from './AppText';
import colors from '../../config/colors';
import i18n from '../../languages/i18n';
import { useSelector } from 'react-redux';

const Card = ({ brand, image, title, subTitle }) => {
	const currentLanguage = useSelector(state => state.profile.language);
	const direction=currentLanguage==='ar'?{textAlign:'right'}:{textAlign:'left'}
	return ( 
		<View style={styles.parent}>
			<Image style={styles.image} source={{ uri: image }} />
			<View style={styles.textWrapper}>
				<AppText style={[styles.brand,direction]} numberOfLines={2}>{brand}</AppText>
				<AppText style={[styles.title,direction]}>{title}</AppText>
				<AppText style={[styles.subTitle,direction]}>{subTitle}</AppText>
				<AppText style={[styles.terms,direction]}>{i18n.t('common.*T&C Apply')}</AppText>
			</View>
		</View>
	);
};
// direction={currentLanguage==='ar'?'row-reverse':'row'}
export default Card;

const styles = StyleSheet.create({
	parent: {
		borderWidth: 1,
		borderColor: colors.primaryShade21,
		//   width:'42%',
		//   height:'37%',
		backgroundColor: colors.white,
		borderRadius: 3
	},
	textWrapper: {
		marginHorizontal: 2
	},
	image: {
		height: 100,
		width: '100%'
		// height: '50%',
		// width: '100%'
	},
	brand: {
		fontSize: 13,
		color: colors.primary2,
		paddingTop: 2,
		height:42,
		textDecorationLine: 'underline',
	},
	title: {
		color: colors.primary1,
		fontWeight: 'bold',
		paddingTop: 15,
		fontSize: 22
	},
	subTitle: {
		color: colors.primaryShade11,
		fontSize: 13,
		paddingBottom: 18
	},
	terms: {
		color: colors.primaryShade23,
		alignSelf: 'flex-end',
		fontSize: 8,
		top: 0,
		right: 5
	}
});
