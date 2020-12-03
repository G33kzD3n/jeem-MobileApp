import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AppText from '../../common/components/AppText';
import colors from '../../config/colors';
import OrderInfoCards from '../components/OrderDetailsComponent/OrderInfoCards';

const data = [
	{
		id: 1,
		status: 'cancelled',
		date: 'Wed, 4nov',
		name: 'Plum',
		subHeading: 'Navy Track Pants',
		seller: 'Jeem',
		image: 'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
	},
	{
		id: 2,
		status: 'delivered',
		date: 'Wed, 4nov',
		name: 'Plum',
		subHeading: 'Navy Track Pants',
		seller: 'Jeem',
		image: 'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
	},
	{
		id: 3,
		status: 'delivered',
		date: 'Wed, 4nov',
		name: 'Plum',
		subHeading: 'Navy Track Pants',
		seller: 'Jeem',
		image: 'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
	},
	{
		id: 4,
		status: 'cancelled',
		date: 'Wed, 4nov',
		name: 'Plum',
		subHeading: 'Navy Track Pants',
		seller: 'Jeem',
		image: 'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
	},
	{
		id: 5,
		status: 'cancelled',
		date: 'Wed, 4nov',
		name: 'Plum',
		subHeading: 'Navy Track Pants',
		seller: 'Jeem',
		image: 'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
	},
	{
		id: 6,
		status: 'cancelled',
		date: 'Wed, 4nov',
		name: 'Plum',
		subHeading: 'Navy Track Pants',
		seller: 'Jeem',
		image: 'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
	},
];

const ViewOrders = () => {
	const navigation = useNavigation();
	const checkStatus = () => {
		// navigation.navigate('ViewOrders');
	};

	const handleBackButton = () => {
		navigation.navigate('Home');
	};

	return (
		<ScrollView style={styles.parent}>
			{data.map((order, index) => (
				<View style={styles.parentContainer} key={index}>
					<View style={styles.topContainer}>
						<MaterialCommunityIcons
							style={styles.icon}
							name={
								order.status === 'cancelled'
									? 'close-circle'
									: 'package-variant-closed'
							}
							size={40}
							color={
								order.status === 'cancelled'
									? colors.primaryShade22
									: 'mediumseagreen'
							}
						/>
						<View>
							<AppText style={styles.text}>{order.status}</AppText>
							<AppText style={styles.subHeading}>On {order.date}</AppText>
						</View>
					</View>
					<OrderInfoCards order={order} />
				</View>
			))}
		</ScrollView>
	);
};

export default ViewOrders;

const styles = StyleSheet.create({
	parentContainer: {
		backgroundColor: colors.white,
		margin: 10,
		padding: 6,
		marginBottom: 0,
	},

	parent: {
		backgroundColor: colors.primaryShade24,
	},
	topContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		color: colors.primary1,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 17,
	},
	subHeading: {
		color: colors.primaryShade21,
		fontSize: 14,
		fontWeight: 'bold',
	},
	icon: {
		paddingHorizontal: 12,
	},
});
