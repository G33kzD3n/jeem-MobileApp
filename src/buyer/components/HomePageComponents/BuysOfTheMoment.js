import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableWithoutFeedback,
} from 'react-native';
import ComponentHeading from '../../../common/components/ComponentHeading';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';

const item = {
	title: 'Fave Products',
	subTitle: 'Now On Jeem',
	// subDetails: 'Up To 60% Off',
	subDetails: 'Comming Soon',
	image:
		'https://structuralengineeringbasics.com/wp-content/uploads/2019/03/STRUCTURAL-ENGINEERING-MATERIALS.png',
};

const BuysOfTheMoment = () => {
	return (
		<View>
			<ComponentHeading text="buys of the moment" />
			<TouchableWithoutFeedback onPress={() => console.log('this is it')}>
				<ImageBackground source={{ uri: item.image }} style={styles.background}>
					<View style={styles.container}>
						<View style={styles.subContainer}>
							<AppText
								style={{
									fontSize: 28,
									color: colors.white,
									fontWeight: 'bold',
								}}
							>
								{item.title}
							</AppText>
							<AppText
								style={{
									color: colors.primaryShade24,
									fontSize: 32,
									fontWeight: 'bold',
								}}
							>
								{item.subTitle}
							</AppText>
							<AppText
								style={{
									color: 'red',
									fontSize: 16,
									backgroundColor: colors.white,
                                    opacity: 0.8,
                                    paddingHorizontal:10
								}}
							>
								{item.subDetails}
							</AppText>
						</View>
					</View>
				</ImageBackground>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default BuysOfTheMoment;

const styles = StyleSheet.create({
	text: {},
	background: {
		height: 300,
	},
	container: {
		// backgroundColor:colors.primaryShade22,
		paddingBottom: 2,
		marginTop: '50%',
		opacity: 0.9,
		elevation: 1,
		shadowColor: 'black',
		shadowOpacity: 0.9,
		shadowRadius: 10,
	},
	subContainer: {
		opacity: 1,
		height: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
});
