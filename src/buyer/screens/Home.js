import React from 'react'
import { StyleSheet,View } from 'react-native'
import Carousel from '../components/Carousel';
import CarouselDisplay from '../components/Carousel';
import SubCategories from '../components/SubCategories';
// import {connect} from 'react-redux';

const Home = () => {
    return (
        <View>
        <CarouselDisplay/>
        <SubCategories/>
        </View>
    )
}



export default Home

const styles = StyleSheet.create({})
