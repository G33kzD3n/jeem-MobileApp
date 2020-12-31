import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AppButton from '../../../common/components/AppButton';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const PlaceOrderBar = ({ scrollViewRef, text, navigationAddress }) => {
	const priceDetails = useSelector((state) => state.cart.priceDetails);
	const navigation = useNavigation();
	const handleOrder = () => { 
		if(navigationAddress==='OrderDetails'){
		navigation.navigate(navigationAddress, {
			totalPrice: priceDetails.totalDiscountPrice});
		}else{
			navigation.navigate(navigationAddress);
		}
	};
	return (
		<View style={styles.parentContainer}>
			<View style={styles.containerLeft}>
				<AppText style={styles.price}>$ {priceDetails.totalDiscountPrice}</AppText>
				<TouchableOpacity
					onPress={() => scrollViewRef.current.scrollToEnd({ animated: true })}
				>
					<AppText style={styles.details}>VIEW DETAILS</AppText>
				</TouchableOpacity>
			</View>
			<View style={styles.containerRight}>
				<AppButton
					color1={colors.primaryShade11}
					color2={colors.primaryShade13}
					text={text}
					borderRadius={3}
					textColor={colors.white}
					paddingText="2%"
					textTransform="uppercase"
					handleClick={() => handleOrder()}
				/>
			</View>
		</View>
	);
};

export default PlaceOrderBar;

const styles = StyleSheet.create({
	parentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: '10%',
		padding: 10,
		backgroundColor: colors.white,
		// marginBottom: 8,
	},
	containerLeft: { flex: 1 },
	containerRight: {
		flexGrow: 1,
	},
	price: {
		color: colors.black,
	},
	details: {
		color: 'red',
		fontSize: 12,
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
});
