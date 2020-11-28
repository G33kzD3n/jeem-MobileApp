import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AppCarousel from '../../common/components/AppCarousel';
import AppScreen from '../../common/components/AppScreen';
import colors from '../../config/colors';
import AppText from '../../common/components/AppText';
import AppButton from '../../common/components/AppButton';
import TextCard from '../../common/components/TextCard';
import Ratings from '../../common/components/Ratings';
const data = {
	image: [
		'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
		'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
		'https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg',
	],
	title: 'DressBerry',
	subTitle: 'Colors for only you',
	details:
		'Best Product in the market to buy and amazing deals only for you. You will not regret it. Best in the market only for you. Best Product in the market to buy and amazing deals only for you. You will not regret it.',
	price: 679,
	orginalPrice: 1049,
	discount: 60,
	seller: 'Jeem Solutions',
};

const SelectAddress = () => {
	return (
		<AppScreen>
			<ScrollView style={{ backgroundColor: colors.primaryShade24 }}>
				<AppCarousel height={styles.carouselHeight} data={data.image} />
				<View style={{ backgroundColor: colors.white, marginBottom: 8 }}>
					<View style={styles.dataContainer}>
						<AppText style={styles.heading}>
							{data.title}
							<AppText style={styles.subHeading}> {data.subTitle}</AppText>
						</AppText>

						<View style={styles.priceContainer}>
							<AppText style={styles.mainPrice}>${data.price} </AppText>
							<AppText style={styles.orginalPrice}>
								${data.orginalPrice}
							</AppText>
							<AppText style={styles.discount}> ({data.discount}% OFF)</AppText>
						</View>

						<AppText style={styles.taxesMessage}>
							inclusive of all taxes
						</AppText>
						<View style={styles.priceContainer}>
							<AppText style={{ color: colors.primary2, fontSize: 16 }}>
								Seller:
							</AppText>
							<AppText
								style={{
									color: colors.primary1,
									fontSize: 15,
									alignSelf: 'center',
								}}
							>
								{' '}
								{data.seller}
							</AppText>
						</View>
					</View>
				</View>
				<TextCard heading={'Product Details'} details={data.details} />
				<Ratings />
			</ScrollView>
			<AppButton
				color1={colors.primaryShade11}
				color2={colors.primaryShade13}
				text="Add To Cart"
				borderRadius={0}
				textColor={colors.white}
			/>
		</AppScreen>
	);
};

export default SelectAddress;

const styles = StyleSheet.create({
	taxesMessage: {
		color: 'green',
		fontSize: 15,
	},
	carouselHeight: {
		height: 550,
		// height:'80%',
		// flex:1
	},
	dataContainer: {
		padding: 10,
		paddingBottom: 5,
		flex: 1,
		//  justifyContent:'space-around'
	},
	discount: {
		color: 'red',
		textTransform: 'uppercase',
		fontSize: 15,
	},
	orginalPrice: {
		color: colors.primary2,
		fontSize: 15,
		textDecorationLine: 'line-through',
	},
	mainPrice: {
		color: colors.primary1,
		fontSize: 18,
		fontWeight: 'bold',
	},
	priceContainer: {
		flexDirection: 'row',
		// alignItems:'center'
	},
	subHeading: {
		color: colors.primary2,
		fontSize: 16,
		paddingBottom: 2,
	},
	heading: {
		color: colors.primary1,
		fontSize: 18,
		fontWeight: 'bold',
		paddingBottom: 2,
	},
	// parent: {
	//     height: 290,
	//     borderRadius: 5,
	//     // borderColor: 'green',
	//     // borderWidth: 1,
	//     width: '100%',
	//     overflow: 'hidden',
	//     backgroundColor:'white'
	// },
	// image: {
	//     height: 200,
	//     width: '100%',

	// }
});
