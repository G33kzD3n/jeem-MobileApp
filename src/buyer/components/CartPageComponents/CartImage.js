import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const CartImage = ({ image, resizeMode = 'cover' }) => {
	// console.log(image);
	return (
		<View>
			<Image
				style={[styles.image]}
				source={{ uri: image }}
				resizeMode={resizeMode}
			/>
		</View>
	);
};

export default CartImage;

const styles = StyleSheet.create({
	image: {
		height: '100%'
	}
});
