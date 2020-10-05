import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import colors from '../../config/colors';
import AppText from './AppText';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({item}) => {
    const navigation = useNavigation();
    const displayProduct=(item)=>{
        // console.log(item,'>>>>>>>>>>>>>>>>>>>>>');
        navigation.navigate('ProductDetails',{item})
   } 
    return (
        

        <TouchableWithoutFeedback onPress={() => displayProduct(item)}>
            <View style={styles.parent}>
                <Image source={{ uri: item.image[0] }} style={styles.image} />
                <View style={styles.dataContainer}>
                    <AppText style={styles.heading}>{item.title}</AppText>
                    <AppText style={styles.subHeading}>{item.subTitle}</AppText>
                    <View style={styles.priceContainer}>
                        <AppText style={styles.mainPrice}>${item.price}  </AppText>
                        <AppText style={styles.orginalPrice}>${item.orginalPrice}</AppText>
                        <AppText style={styles.discount}>  {item.discount}% OFF</AppText>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default ProductCard

const styles = StyleSheet.create({
    dataContainer:{
        padding:10
    //  justifyContent:'space-around'
    },
    discount:{
      color:'red',
      textTransform:'uppercase',
      fontSize:15
    },
    orginalPrice:{
        color: colors.primary2,
        fontSize: 15,
        textDecorationLine: 'line-through'
    },
    mainPrice: {
        color: colors.primary1,
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    priceContainer: {
        flexDirection: 'row',
    },
    subHeading: {
        color: colors.primary2,
        fontSize: 15,
        paddingBottom:2
    },
    heading: {
        color: colors.primary1,
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom:2
    },
    parent: {
        height: 290,
        borderRadius: 5,
        // borderColor: 'green',
        // borderWidth: 1,
        width: '100%',
        overflow: 'hidden',
        backgroundColor:'white'
    },
    image: {
        height: 200,
        width: '100%',

    }
})
