import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AppText from './AppText';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Avatar = ({ text, image, customStyles }) => {
	return (
		<View style={styles.parent}>
			{text !== 'All' ? (
				<Image style={[styles.image, customStyles]} source={{ uri: image }} />
			) : (
				<MaterialCommunityIcons
					style={styles.icon}
					name="format-list-bulleted"
					size={37}
					color="black"
				/>
			)}
			<AppText
				style={{ color: colors.primary1, fontSize: 12, textAlign: 'center' }}
			>
				{text}
			</AppText>
		</View>
	);
};

export default Avatar;

const styles = StyleSheet.create({
	parent: {
		alignItems: 'center'
	},
	image: {
		height: 50,
		width: 50,
		borderRadius: 25
	},
	icon: {
		borderColor: colors.primary2,
		borderWidth: 1,
		//backgroundColor: colors.primaryShade23,
		borderRadius: 25,
		padding: 5,
		textAlign: 'center',
		color: colors.primary2
	}
});
