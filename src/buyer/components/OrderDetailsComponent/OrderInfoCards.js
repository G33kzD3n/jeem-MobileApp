import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';
import CartImage from '../CartPageComponents/CartImage';
import { useNavigation } from '@react-navigation/native';
import i18n from '../../../languages/i18n';
import { apiUrlImageProducts } from '../../../config/config';

const OrderInfoCards = ({ order }) => {
	const navigation = useNavigation();
	const fullDetails = () => {
		navigation.navigate('ItemDetails', {
			order: order,
			name: i18n.t('appNavigation.ITEM DETAILS')
		});
	};
	return (
		<TouchableWithoutFeedback
			onPress={() => fullDetails()}
			style={styles.touch}
		>
			<View style={styles.secondSection}>
				<View style={styles.first}>
					<CartImage
						image={
							apiUrlImageProducts +
							order.productName +
							'-' +
							order.productSku +
							'/' +
							order.productImage
						}
					/>
				</View>
				<View style={styles.second}>
					<AppText style={styles.heading}>{order.productName}</AppText>
					<AppText style={styles.subHeading}>{order.productAddInfo}</AppText>
					<View style={styles.priceContainer}>
						<AppText style={{ color: colors.primary2, fontSize: 12 }}>
							{i18n.t('orderScreen.Sold by:')}
							<AppText
								style={{
									color: colors.primary1,
									fontSize: 12,
									alignSelf: 'center'
								}}
							>
								{' '}
								{order.sellerName}
							</AppText>
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
		flexDirection: 'row'
		// alignItems:'center'
	},
	first: {
		// flex: 1,
		height: 80,
		width: 60
	},
	touch: {
		backgroundColor: colors.white
	},
	secondSection: {
		backgroundColor: colors.primaryShade24,
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
		margin: 10,
		padding: 12,
		borderRadius: 2
	},
	third: {
		alignItems: 'flex-end'
		// flex: 1,
		// borderColor:'red',
		// borderWidth:10
	},
	second: {
		paddingHorizontal: 10,
		flex: 1
		// 	borderColor:'red',
		// borderWidth:10
	},
	heading: {
		color: colors.primary1,
		fontSize: 18,
		fontWeight: 'bold',
		paddingBottom: 2
	},
	subHeading: {
		color: colors.primary2,
		fontSize: 16,
		paddingBottom: 2
		// width:'70%',
	}
});
