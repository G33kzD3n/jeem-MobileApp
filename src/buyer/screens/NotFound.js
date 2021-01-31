import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import AppButton from '../../common/components/AppButton';
import AppScreen from '../../common/components/AppScreen';
import colors from '../../config/colors';
import { apiUrlImageStatic } from '../../config/config';

const NotFound = ({ onClick, name }) => {
	return (
		<AppScreen>
			<View style={styles.parentNotFound}>
				<View style={{ flex: 0.1 }}></View>
				<ImageBackground
					source={{ uri: apiUrlImageStatic+'not-found.jpeg' }}
					style={styles.background}
				/>
				<AppButton
					color1={colors.primaryShade11}
					color2={colors.primaryShade13}
					borderRadius={2}
					textColor={colors.white}
					width="45%"
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
		alignItems: 'center',
		backgroundColor:'white'
	},
	background: {
		flex: 2,
		width: '100%',
		height:'200%',
		resizeMode:'center'
	},
	button: {
		flex: 1.3
	}
});
