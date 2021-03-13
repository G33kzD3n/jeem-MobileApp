import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import colors from '../../config/colors';
import i18n from '../../languages/i18n';
import AppText from './AppText';

const Ratings = ({ ratings, totalReviews }) => {
	return (
		<View style={styles.topContainer}>
			<AppText style={styles.heading}>{i18n.t('common.Ratings and Reviews')}</AppText>
			<View style={styles.innerContainer}>
				<Rating
					showRating={false}
					style={styles.ratings}
					startingValue={ratings}
					imageSize={22}
					readonly={true}
					fractions={false}
					ratingCount={5}
				/>
				<AppText style={styles.ratingText}>{ratings} {i18n.t('common.out of 5')}</AppText>
			</View>
			<AppText style={styles.globalRatings}>
				{totalReviews} {i18n.t('common.global ratings')}
			</AppText>
		</View>
	);
};

export default Ratings;

const styles = StyleSheet.create({
	globalRatings: {
		color: colors.primaryShade21,
		fontSize: 15
	},
	innerContainer: {
		flexDirection: 'row',
		paddingBottom: 8
	},
	ratings: {
		alignSelf: 'flex-start'
	},
	topContainer: {
		marginTop: 8,
		backgroundColor: colors.white,
		padding: 10,
	},
	ratingText: {
		color: colors.primary1,
		fontSize: 18,
		paddingLeft: 10
	},
	heading: {
		color: colors.primary1,
		fontSize: 17,
		paddingBottom: 8
	}
});
