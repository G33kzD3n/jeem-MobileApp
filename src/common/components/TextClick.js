import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import AppText from './AppText';

const TextClick = ({
	size = 18,
	color,
	onClick,
	text,
	weight,
	textDecorationLine = 'none'
}) => {
	return (
		<TouchableWithoutFeedback onPress={onClick} style={styles.touch}>
			<View>
				<AppText
					style={{
						fontSize: size,
						color: color,
						fontWeight: weight,
						textDecorationLine: textDecorationLine
					}}
				>
					{text}
				</AppText>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default TextClick;

const styles = StyleSheet.create({
	touch: {}
});
