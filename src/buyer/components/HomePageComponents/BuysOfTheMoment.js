import React from 'react';
import {
	StyleSheet,
	View,
	ImageBackground,
	TouchableWithoutFeedback
} from 'react-native';
import ComponentHeading from '../../../common/components/ComponentHeading';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';
import i18n from '../../../languages/i18n';
import { apiUrlImageStatic } from '../../../config/config';


const BuysOfTheMoment = () => {
	return (
		<View>
			<ComponentHeading
			//  text={i18n.t('homeScreen.buys of the moment')} 
			 />
			<TouchableWithoutFeedback onPress={() => console.log('this is it')}>
				<ImageBackground
				 source={{ uri: apiUrlImageStatic+'signupin.jpg' }}
					// source={{
					// 	uri:
					// 		'https://structuralengineeringbasics.com/wp-content/uploads/2019/03/STRUCTURAL-ENGINEERING-MATERIALS.png'
					// }}
					style={styles.background}
				>
					<View style={styles.container}>
						<View style={styles.subContainer}>
							<AppText
								style={{
									fontSize: 30,
									textAlign:'center',
									color: colors.white,
									backgroundColor: colors.primary1,
									opacity: 0.6,
									fontWeight: 'bold'
								}}
							>
								{/* {i18n.t('homeScreen.Fave Products')} */}
								{i18n.t('homeScreen.aboutUs3')}
								
							</AppText>
							<AppText
								style={{
									color: colors.primaryShade24,
									fontSize: 32,
									fontWeight: 'bold'
								}}
							>
								{/* {i18n.t('homeScreen.Now On Jeem')} */}
							</AppText>
							<AppText
								style={{
									color: 'red',
									fontSize: 16,
									backgroundColor: colors.white,
									opacity: 0.8,
									paddingHorizontal: 10
								}}
							>
								{/* {i18n.t('homeScreen.Comming Soon')} */}
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
		height: 300
	},
	container: {
		// backgroundColor:colors.primaryShade22,
		paddingBottom: 2,
		marginTop: '50%',
		opacity: 0.9,
		elevation: 1,
		shadowColor: 'black',
		shadowOpacity: 0.9,
		shadowRadius: 10
	},
	subContainer: {
		opacity: 1,
		height: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center'
	}
});
