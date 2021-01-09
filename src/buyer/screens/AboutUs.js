import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppText from '../../common/components/AppText';
import colors from '../../config/colors';
import { LinearGradient } from 'expo-linear-gradient';

const AboutUs = () => {
	return (
		<View style={styles.parent}>
      	<ImageBackground
				source={require('../../assets/background.png')}
				blurRadius={3}
				style={styles.image}
			>
			<AppText style={styles.text1}>
				JEEM is a plat form that will connect the server provider with the
				consumer in every thing that matters in the building industry by listing
				all the big names in the building material industry and the and
				contractors
			</AppText>
      </ImageBackground>
      <LinearGradient
				style={styles.modal}
				start={[0.4, 0.1]}
				end={[0.5, 0.8]}
				colors={[
					colors.primaryShade24,
					colors.primaryShade24,
					colors.primaryShade22,
					colors.primaryShade24,
					colors.primaryShade24,
				]}
			>
			<AppText style={styles.text2}>
				We JEEM A start up in the building industry to help and make the
				technology part of this big industry and to go hand in hand with the
				great vision of Saudi Arabia 2030
			</AppText>
      </LinearGradient>
			<AppText style={styles.text3}>
				{`We at JEEM looking to give the consumers THE great experience of giving them THE EASY WAY TO BULID To have all the leaders in the building industry under one umbrella 
    - easy 
    - many chooses 
    - the higher quality
    - the diversity of prices`}
			</AppText>
		</View>
	);
};

export default AboutUs;

const styles = StyleSheet.create({
  modal: {
		// backgroundColor: colors.primary2,
		flex: 1,
    opacity: 0.8,
	},
  parent:{
    flex:1,
    // paddingVertical:20
  },
  image:{
    flex:1,
  },
  text1:{
   color:colors.white,
   paddingHorizontal:10,
   fontSize:21,
   textAlign:'justify',
  //  textAlignVertical:'bottom',
   flex:1,
   paddingBottom:10,
   fontWeight:'bold'
  },
  text2:{
    color:colors.primary1,
    paddingHorizontal:10,
    textAlign:'center',
    fontSize:30,
    flex:1,
    fontWeight:'bold'
    // backgroundColor:colors.primaryShade23
  },
  text3:{
    color:colors.primary2,
    paddingHorizontal:10,
    flex:1,
    textAlign:'justify',
    fontSize:20,
    backgroundColor:colors.primaryShade24
  },
});
