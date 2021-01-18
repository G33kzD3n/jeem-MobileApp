import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import AppDivider from './AppDivider';
import AppText from './AppText';
 
const Reviews = ({reviews}) => {
	return (
		<React.Fragment>
			{reviews.map(data=>
			<React.Fragment key={data.id}>
			<AppDivider />
			<View style={styles.topContainer}>
				<View style={styles.cartImage}>
					<AppText style={styles.text}>{data.rating}</AppText>
					<MaterialCommunityIcons name="star" size={15} color="white" />
				</View>
				<View style={styles.dataContainer}>
					<AppText style={styles.comment}>
					{data.reviewContent}
					</AppText>
          <AppText style={styles.details}>
					{data.reviewUserName} | {new Date(data.created_at).toDateString()}
					</AppText>
				</View>
			</View>
			</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Reviews;

const styles = StyleSheet.create({
  details:{
    color: colors.primaryShade21,
    fontSize: 12,
    paddingTop:15
  },
	comment: {
		color: colors.primary1,
		fontSize: 15
	},
	text: {
		color: 'white',
		fontSize: 15
	},
	topContainer: {
		backgroundColor: colors.white,
		marginBottom: 1,
		flexDirection: 'row',
		flex: 1,
		borderColor: 'red',
		paddingVertical: 10,
		justifyContent: 'space-evenly'
	},
	cartImage: {
		flexDirection: 'row',
		flex: 0.4,
		paddingVertical: 1,
		marginHorizontal: 10,
		backgroundColor: colors.secondarGreen,
    justifyContent: 'center',
    alignItems:'center',
    marginVertical:10
	},
	dataContainer: {
		flexDirection: 'column',
		// paddingBottom: 5,
		flex: 4
		//  justifyContent:'space-around'
	}
});
