import React from 'react';
import { StyleSheet,  TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import AppText from './AppText';

const ProfileCard = ({
	icon,
	heading,
	subHeading,
	customStyle,
	onPress,
	direction='row',
	icon2 = undefined
}) => {
	return (
		<View style={customStyle}>
			<TouchableOpacity style={styles.topTouch} onPress={onPress}>
				<View style={[styles.topContainer,{flexDirection:direction}]}>
					<MaterialCommunityIcons
						style={styles.icon}
						name={icon}
						size={35}
						color={colors.primaryShade21}
					/>
					<View>
						<AppText style={styles.text}>{heading}</AppText>
						{subHeading && (
							<AppText style={styles.subHeading}>{subHeading}</AppText>
						)}
					</View>
					{icon2 && (
						<View style={styles.secondIcon}>
							<MaterialCommunityIcons
								style={styles.icon}
								name={icon2}
								size={35}
								color={colors.primaryShade21}
							/>
						</View>
					)}
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default ProfileCard;

const styles = StyleSheet.create({
	secondIcon: {
		alignItems: 'flex-end',
		flex: 1
	},
	topTouch: {
		height: 80,
		justifyContent: 'center'
	},
	topContainer: {
		alignItems: 'center',
		// flexDirection:'row-reverse'
		// borderColor:'red',
		// borderWidth:3
	},
	text: {
		color: colors.primary1,
		textTransform: 'uppercase'
	},
	subHeading: {
		color: colors.primaryShade21,
		fontSize: 14
	},
	icon: {
		paddingHorizontal: 12
	}
});
