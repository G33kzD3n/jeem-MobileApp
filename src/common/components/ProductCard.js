import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import colors from '../../config/colors';
import AppText from './AppText';

const ProductCard = ({ image, heading, subHeading, price, orginalPrice, discount }) => {
    return (

        <TouchableWithoutFeedback onPress={() => console.log(heading)}>
            <View style={styles.parent}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.dataContainer}>
                    <AppText style={styles.heading}>{heading}</AppText>
                    <AppText style={styles.subHeading}>{subHeading}</AppText>
                    <View style={styles.priceContainer}>
                        <AppText style={styles.mainPrice}>${price}  </AppText>
                        <AppText style={styles.orginalPrice}>${orginalPrice}</AppText>
                        <AppText style={styles.discount}>  {discount}% OFF</AppText>
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
