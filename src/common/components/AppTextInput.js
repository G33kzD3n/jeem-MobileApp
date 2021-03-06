import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import defaultStyles from '../../config/defaultStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import AppText from './AppText';
import i18n from '../../languages/i18n';

export default function AppTextInput({
	name,
	icon,
	overrideContainer,
	overrideTextbox,
	width = '100%',
	...otherProps
}) {
	return (
		<View style={[styles.container, overrideContainer]}>
			{icon && <MaterialCommunityIcons name={icon} />}
			<TextInput
				selectionColor={colors.white}
				placeholderTextColor={colors.white}
				style={[defaultStyles.text, styles.textInput, overrideTextbox]}
				{...otherProps}
			/>
			{name === 'password' && <AppText style={styles.forgot}>{i18n.t('common.Forgot?')}</AppText>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		paddingHorizontal: 15,
		marginVertical: 10,
		borderBottomColor: colors.primaryShade14,
		borderBottomWidth: 0.5
	},
	forgot: {
		color: colors.white
	},
	textInput: {
		fontWeight: 'bold',
		width: '80%',
		paddingVertical: 15,
		color: colors.white,
		textAlignVertical: 'top',
	}
});
