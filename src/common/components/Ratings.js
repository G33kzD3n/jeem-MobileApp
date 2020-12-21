import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import colors from '../../config/colors';
import AppText from './AppText';

const Ratings = ({ ratings }) => {
	return (
		<View style={styles.topContainer}>
			<AppText style={styles.heading}>Ratings and Reviews</AppText>
			<View style={styles.innerContainer}>
				<Rating
					showRating={false}
					style={styles.ratings}
					startingValue={3}
					imageSize={22}
					readonly={true}
					fractions={false}
					ratingCount={5}
				/>
				<AppText style={styles.ratingText}>{ratings} out of 5</AppText>
			</View>
			<AppText style={styles.globalRatings}>15,540 global ratings</AppText>
		</View>
	);
};

export default Ratings;

const styles = StyleSheet.create({
	globalRatings: {
		color: colors.primaryShade21,
		fontSize: 15,
	},
	innerContainer: {
		flexDirection: 'row',
		paddingBottom: 8,
	},
	ratings: {
		alignSelf: 'flex-start',
	},
	topContainer: {
		marginTop: 8,
		backgroundColor: colors.white,
		padding: 10,
	},
	ratingText: {
		color: colors.primary1,
		fontSize: 18,
		paddingLeft: 10,
	},
	heading: {
		color: colors.primary1,
		fontSize: 17,
		paddingBottom: 8,
	},
});
