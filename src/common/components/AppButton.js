import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const AppButton = ({
	customStyle,
	borderRadius = 20,
	handleClick,
	color1 = colors.primaryShade12,
	color2,
	textColor = 'black',
	text,
	textAlign = 'center',
	icon,
	width = '100%',
	iconSize = 24,
	iconColor = 'white',
	paddingText,
	paddingVertical = '3.5%',
	textTransform = 'capitalize',
}) => {
	return (
		<TouchableOpacity
			onPress={handleClick}
			style={[customStyle, { width: width }]}
		>
			<LinearGradient
				style={[
					styles.touchableOpacity,
					{ borderRadius: borderRadius, paddingVertical: paddingVertical },
				]}
				colors={[color2, color1, color1, color2]}
				start={[0, 0]}
				end={[1, 1]}
			>
				<View>
					{text && (
						<AppText
							style={{
								color: textColor,
								padding: paddingText,
								textTransform: textTransform,
								textAlign: textAlign,
							}}
						>
							{text}
						</AppText>
					)}
					{icon && (
						<MaterialCommunityIcons
							style={styles.icon}
							name={icon}
							size={iconSize}
							color={iconColor}
						/>
					)}
				</View>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default AppButton;

const styles = StyleSheet.create({
	icon: {
		textAlign: 'center',
		paddingVertical: 5,
	},
	touchableOpacity: {
		justifyContent: 'center',
	},
});
