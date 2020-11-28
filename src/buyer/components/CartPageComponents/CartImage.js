import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CartImage = ({ image }) => {
	return (
		<View>
			<Image style={[styles.image]} source={{ uri: image }} />
		</View>
	);
};

export default CartImage;

const styles = StyleSheet.create({
	image: {
		height: '100%',
	},
});
