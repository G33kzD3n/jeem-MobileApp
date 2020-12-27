import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import colors from '../../config/colors';

const Loader = ({ screen = 'full' }) => {
	return (
		<View style={screen === 'full' && styles.overlay}>
			<ActivityIndicator
				size="large"
				color={colors.primaryShade11}
				style={styles.loader}
			/>
		</View>
	);
};

export default Loader;

const styles = StyleSheet.create({
	loader: {
		flex: 1,
	},
	overlay: {
		position: 'absolute',
		backgroundColor: colors.primaryShade24,
		opacity: 0.8,
		height: '100%',
		width: '100%',
		zIndex: 1,
	},
});
