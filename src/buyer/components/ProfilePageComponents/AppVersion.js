import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../../config/colors'

const AppVersion = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>APP VERSION 1.0</Text>
        </View>
    )
}

export default AppVersion

const styles = StyleSheet.create({
    container:{
        marginVertical:30,
        alignItems:'center'
    },
    text:{
        color:colors.primary2
    }
})
