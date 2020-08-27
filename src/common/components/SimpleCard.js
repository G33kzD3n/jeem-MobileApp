import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppText from './AppText';
import colors from '../../config/colors';

const SimpleCard = ({image,title,subTitle,brandLogo,imageStyle}) => {
    return (
        <View style={styles.parent}>
            <Image style={[styles.image,imageStyle]} source={{ uri: image }} />
           <View style={styles.textWrapper}>
           {brandLogo&& <View style={styles.brandImage}>
                <Image style={styles.brandImage} resizeMode='contain' source={{ uri: brandLogo }} />
            </View>}
            <AppText style={styles.title}>{title}</AppText>
           {subTitle&&<AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
            
        </View>
    )
}

export default SimpleCard

const styles = StyleSheet.create({
    parent:{
    //   borderWidth:1,
    //   borderColor:colors.primaryShade21,
    //   width:'42%',
    //   height:'37%',
    backgroundColor:colors.primaryShade24,
      borderRadius:3
    },
    textWrapper:{
        marginLeft:2,
        
    },
    brandImage: {
        height: 35,
        width: '100%'
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
       paddingTop:5,
       fontSize:22,
       textAlign:'center'
    },
    subTitle:{
      color:colors.primaryShade11,
      fontSize:13,
      paddingBottom:5,
      textAlign:'center'
    },
    terms:{
        color:colors.primaryShade23,
        alignSelf:'flex-end',
        fontSize:8,
        top:0,
        right:5
        
    }
})
