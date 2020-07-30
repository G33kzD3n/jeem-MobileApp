import React from 'react'
import { StyleSheet } from 'react-native'
import AppText from '../AppText';

const ErrorMessage = ({ error, visible }) => {
    return (
        <>
            {visible && error && <AppText style={styles.msg} size={15}>{error}</AppText>}
        </>
    )
}

export default ErrorMessage

const styles = StyleSheet.create({
    msg: {
        color: 'red'
    }
})
