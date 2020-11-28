import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from '../../../common/components/AppButton';
import colors from '../../../config/colors';

const ProductButtons = () => {
	return (
		<View style={styles.topContainer}>
			<AppButton
				color1={colors.white}
				color2={colors.white}
				text="REMOVE"
				borderRadius={3}
				textColor={colors.primary2}
				customStyle={styles.button}
			/>
		</View>

		// <TouchableOpacity onPress={() => console.log('remove')} >
		// 	<Text>Buttom</Text>
		// </TouchableOpacity>
	);
};

export default ProductButtons;

const styles = StyleSheet.create({
	topContainer: {
		marginBottom: 8,
	},
});
