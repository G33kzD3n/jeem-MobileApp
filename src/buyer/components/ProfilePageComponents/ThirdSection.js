import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppText from '../../../common/components/AppText'
import colors from '../../../config/colors'

const ThirdSection = () => {
    return (
        <View style={styles.topContainer}>
           <TouchableOpacity style={styles.container}>
               <AppText style={styles.text}>FAQs</AppText>
           </TouchableOpacity>
           <TouchableOpacity style={styles.container}>
               <AppText style={styles.text}>ABOUT US</AppText>
           </TouchableOpacity>
           <TouchableOpacity style={styles.container}>
               <AppText style={styles.text}>TERMS OF USE</AppText>
           </TouchableOpacity>
           <TouchableOpacity style={styles.container}>
               <AppText style={styles.text}>PRIVACY POLICY</AppText>
           </TouchableOpacity>
        </View>
    )
}

export default ThirdSection

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        height:50,
        // borderColor:'red',
        // borderWidth:3,
        justifyContent:'center',
        paddingLeft:60
    },
    text:{
        color:colors.primary1,
        textTransform:'uppercase',
        fontSize:14
    },
    topContainer:{
     marginTop:8
    }
})
