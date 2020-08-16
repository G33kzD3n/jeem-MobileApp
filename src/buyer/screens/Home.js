import React from 'react'
import { StyleSheet,Text } from 'react-native'
import CarouselDisplay from '../components/Carousel';
import SubCategories from '../components/SubCategories';
// import {connect} from 'react-redux';

const Home = () => {
    return (
        <>
        <CarouselDisplay/>
        <SubCategories/>
        </>
    )
}



export default Home

const styles = StyleSheet.create({})
