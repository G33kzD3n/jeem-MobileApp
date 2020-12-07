import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const data = {
	id: 6,
	status: 'cancelled',
	date: 'Wed, 4nov',
	name: 'Plum',
	subHeading: 'Navy Track Pants',
	seller: 'Jeem',
	image: 'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
};
const OrderFullDetail = () => {
	return (
		<ScrollView style={styles.parent}>
			<View style={styles.child1}>
				<Image source={{ uri: data.image }} style={styles.image} />
				<AppText style={styles.heading}>{data.name}</AppText>
				<AppText style={styles.subHeading}>{data.subHeading}</AppText>
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
						{data.seller}
					</AppText>
				</View>
			</View>
			<View style={styles.topContainer}>
				<MaterialCommunityIcons
					style={styles.icon}
					name={
						data.status === 'cancelled'
							? 'close-circle'
							: 'package-variant-closed'
					}
					size={40}
					color={
						data.status === 'cancelled'
							? colors.primaryShade22
							: 'mediumseagreen'
					}
				/>
				<View>
					<AppText style={styles.text}>{data.status}</AppText>
					<AppText style={styles.subHeading}>On {data.date}</AppText>
				</View>
			</View>
			<View style={styles.parentContainer}>
				<View style={styles.container}>
					<AppText style={styles.total}>Total Order Price</AppText>
					<AppText style={styles.total}>$592</AppText>
				</View>
				<AppText style={styles.subHeading}>
					You saved $592 on this order
				</AppText>
			</View>
			<View style={styles.newView}>
				<AppText style={[styles.total, { paddingBottom: 6 }]}>
					Updates sent to
				</AppText>
				<View style={styles.contactInfo}>
					<MaterialCommunityIcons
						style={styles.contactIcon}
						name={'phone'}
						size={20}
						color={colors.primaryShade22}
					/>
					<AppText style={styles.subHeading}>7889567946</AppText>
				</View>
				<View style={styles.contactInfo}>
					<MaterialCommunityIcons
						style={styles.contactIcon}
						name={'email'}
						size={20}
						color={colors.primaryShade22}
					/>
					<AppText style={[styles.subHeading, { textTransform: 'lowercase' }]}>
						iammirbasit@gmail.com
					</AppText>
				</View>
			</View>
			<View style={styles.newView}>
				<AppText style={[styles.subHeading, { textTransform: 'uppercase' }]}>
					ORDER ID 112233324567889
				</AppText>
			</View>
		</ScrollView>
	);
};

export default OrderFullDetail;

const styles = StyleSheet.create({
	contactIcon: {
		paddingRight: 6,
	},
	contactInfo: {
		flexDirection: 'row',
	},
	newView: {
		marginTop: 8,
		padding: 10,
		backgroundColor: colors.white,
	},
	parentContainer: {
		backgroundColor: colors.white,

		padding: 10,
		marginTop: 8,
	},
	total: {
		color: colors.primary1,
		fontWeight: 'bold',
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 5,
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
	topContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.white,
		paddingVertical: 20,
	},
	icon: {
		paddingHorizontal: 12,
	},
	image: {
		height: 200,
		width: 150,
		alignSelf: 'center',
	},
	parent: {
		backgroundColor: colors.primaryShade24,
	},
	child1: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 45,
		// borderColor: 'red',
		// borderWidth: 3,
	},
	child2: {
		flex: 1,
	},
	heading: {
		color: colors.primary1,
		fontSize: 18,
		fontWeight: 'bold',
		paddingBottom: 2,
		paddingTop: 8,
	},
	subHeading: {
		color: colors.primary2,
		fontSize: 16,
		paddingBottom: 2,
	},
	priceContainer: {
		flexDirection: 'row',
		// alignItems:'center'
	},
});
