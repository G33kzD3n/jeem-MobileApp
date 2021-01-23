import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import AppButton from '../../common/components/AppButton';
import AppScreen from '../../common/components/AppScreen';
import colors from '../../config/colors';

const NotFound = ({ onClick, name }) => {
	return (
		<AppScreen>
			<View style={styles.parentNotFound}>
				<View style={{ flex: 0.7 }}></View>
				<ImageBackground
					source={require('../../assets/not-found.png')}
					style={styles.background}
				/>
				<AppButton
					color1={colors.primaryShade11}
					color2={colors.primaryShade13}
					borderRadius={2}
					textColor={colors.white}
					width="50%"
					text={name}
					customStyle={styles.button}
					textTransform="uppercase"
					handleClick={onClick}
				/>
			</View>
		</AppScreen>
	);
};

export default NotFound;

const styles = StyleSheet.create({
	parentNotFound: {
		flex: 1,
		alignItems: 'center'
	},
	background: {
		flex: 2,
		width: '100%'
	},
	button: {
		flex: 1.3
	}
});
