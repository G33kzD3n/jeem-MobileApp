import React from 'react';
import {
	StyleSheet,
	View,
	ImageBackground,
	TouchableWithoutFeedback
} from 'react-native';
import colors from '../../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from '../../../common/components/AppText';
import { apiUrlImageStatic } from '../../../config/config';

const CategoryCard = ({ toggleExpanded, data, collapsedSubCat }) => {
	return (
		<TouchableWithoutFeedback onPress={() => toggleExpanded(data.categoryName)}>
			<View style={styles.box1}>
				<ImageBackground
					source={{
						uri: apiUrlImageStatic +data.categoryImage
					}}
					style={styles.containerStyle}
				>
					<View style={styles.innerBoxes1}>
						<AppText style={styles.text}>{data.categoryName}</AppText>
						{!collapsedSubCat.collapseCat &&
						collapsedSubCat.cat === data.categoryName ? (
							<MaterialCommunityIcons
								style={styles.icon}
								name="chevron-up"
								size={50}
								color={colors.primary1}
							/>
						) : (
							<MaterialCommunityIcons
								style={styles.icon}
								name="chevron-down"
								size={50}
								color={colors.primary1}
							/>
						)}
					</View>
					<View style={styles.innerBoxes2}></View>
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default CategoryCard;
const styles = StyleSheet.create({
	icon: {
		alignSelf: 'center',
		textAlign: 'left',
		paddingTop: 5,
		fontWeight:'bold'
	},
	text: {
		color: colors.primary1,
		fontWeight: 'bold',
		fontSize: 25,
		width: '65%',
		textAlign:'center',
		alignSelf:'center'
	},
	containerStyle: {
		flexDirection: 'row',
		flex: 1,
		resizeMode: 'contain'
	},
	innerBoxes1: {
		flexDirection: 'row',
		flex: 2,
		backgroundColor: colors.primaryShade23,
		opacity: 0.8,
		borderTopEndRadius: 250,
		justifyContent: 'center',
	},
	innerBoxes2: {
		flex: 1,
	},
	box1: {
		backgroundColor: colors.primaryShade12,
		flexGrow: 1,
		justifyContent: 'space-between',
	}
});
