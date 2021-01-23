import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SearchButton = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="magnify"
					size={30}
					color={colors.primary2}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default SearchButton;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primaryShade13,
		height: 80,
		width: 80,
		borderRadius: 40,
		bottom: 21,
		borderColor: colors.primaryShade24,
		borderWidth: 10,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
