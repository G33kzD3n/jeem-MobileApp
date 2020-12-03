import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';
import CartImage from '../CartPageComponents/CartImage';

const OrderInfoCards = ({ order }) => {
	return (
		<TouchableWithoutFeedback
			onPress={() => console.log('hello')}
			style={styles.touch}
		>
			<View style={styles.secondSection}>
				<View style={styles.first}>
					<CartImage image={order.image} />
				</View>
				<View style={styles.second}>
					<AppText style={styles.heading}>{order.name}</AppText>
					<AppText style={styles.subHeading}>{order.subHeading}</AppText>
					<View style={styles.priceContainer}>
						<AppText style={{ color: colors.primary2, fontSize: 12 }}>
							Sold by:
						</AppText>
						<AppText
							style={{
								color: colors.primary1,
								fontSize: 12,
								alignSelf: 'center',
							}}
						>
							{' '}
							{order.seller}
						</AppText>
					</View>
				</View>
				<View style={styles.third}>
					<MaterialCommunityIcons
						style={styles.icon}
						name="chevron-right"
						size={40}
						color={colors.primary1}
					/>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default OrderInfoCards;

const styles = StyleSheet.create({
	priceContainer: {
		flexDirection: 'row',
		// alignItems:'center'
	},
	first: {
		// flex: 1,
		height: 80,
		width: 60,
	},
	touch: {
		backgroundColor: colors.white,
	},
	secondSection: {
		backgroundColor: colors.primaryShade24,
		flexDirection: 'row',
		alignItems: 'center',
		margin: 10,
		padding: 12,
		borderRadius: 2,
	},
	third: {
		alignItems: 'flex-end',
		flex: 1,
	},
	second: {
		paddingHorizontal: 10,
	},
	heading: {
		color: colors.primary1,
		fontSize: 18,
		fontWeight: 'bold',
		paddingBottom: 2,
	},
	subHeading: {
		color: colors.primary2,
		fontSize: 16,
		paddingBottom: 2,
	},
});
