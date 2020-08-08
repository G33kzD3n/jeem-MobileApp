import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {connect} from 'react-redux';

const Home = ({ctr}) => {
    return (
        <View>
            <Text>{ctr}</Text>
        </View>
    )
}

const mapStateToProps=state=>{
    console.log(state)
    return{
        ctr:state.data
    }
}

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({})
