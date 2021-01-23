import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import AppText from './AppText';
const AppSwitch = ({ toggleSwitch, isEnabled, text }) => {
	return (
		<View style={styles.container}>
			<Switch
				style={styles.switch}
				trackColor={{ false: colors.primaryShade13, true: colors.white }}
				thumbColor={colors.white}
				ios_backgroundColor="#3e3e3e"
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
			<AppText style={{ color: colors.white }} size={15}>
				{text}
			</AppText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
		flexDirection: 'row'
	},
	switch: {
		// borderColor:'red',
		// borderWidth:2,
	}
});

export default AppSwitch;
