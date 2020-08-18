import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppText from './AppText';
import colors from '../../config/colors';

const Card = ({brand,image,title,subTitle}) => {
    return (
        <View style={styles.parent}>
            <Image style={styles.image} source={{ uri: image }} />
           <View style={styles.textWrapper}>
            <AppText style={styles.brand}>{brand}</AppText>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            <AppText style={styles.terms}>*T&C Apply</AppText>
            </View>
            
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    parent:{
      borderWidth:1,
      borderColor:colors.primaryShade21,
    //   width:'42%',
    //   height:'37%',
      backgroundColor:colors.white,
      borderRadius:3
    },
    textWrapper:{
        marginLeft:2,
        
    },
    image: {
          height:100,
          width:'100%'
        // height: '50%',
        // width: '100%'
    },
    brand:{
        fontSize:13,
        color:colors.primary2,
        paddingTop:2,
        textDecorationLine: 'underline'
    },
    title:{
       color:colors.primary1,
       fontWeight:'bold',
       paddingTop:15,
       fontSize:25
    },
    subTitle:{
      color:colors.primaryShade11,
      fontSize:18,
      paddingBottom:18
    },
    terms:{
        color:colors.primaryShade23,
        alignSelf:'flex-end',
        fontSize:8,
        top:0,
        right:5
        
    }
})
