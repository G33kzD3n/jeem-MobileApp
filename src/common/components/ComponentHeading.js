import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors';
import AppText from './AppText';

const ComponentHeading = ({text}) => {
    return (
        <AppText style={styles.heading}>{text}</AppText>
    )
}

export default ComponentHeading

const styles = StyleSheet.create({
    heading:{
        color:colors.primary2,
        fontSize:12,
        paddingTop:13,
        paddingBottom:7,
        paddingLeft:8,
        textTransform:'uppercase'

    }
})
