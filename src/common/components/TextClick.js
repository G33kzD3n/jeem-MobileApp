import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native';
import AppText from './AppText';

const TextClick = ({size=18,color,onClick,text,weight,textDecorationLine='none'}) => {
    return (
        <TouchableHighlight onPress={onClick} style={styles.touch}>
            <AppText style={{fontSize:size,color:color,fontWeight:weight,textDecorationLine:textDecorationLine}}>
            {text}
            </AppText>
        </TouchableHighlight>
    )
}

export default TextClick

const styles = StyleSheet.create({
    touch:{
        // borderColor:'red',
        // borderWidth:2
    }
})
