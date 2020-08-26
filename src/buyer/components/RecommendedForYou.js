import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ComponentHeading from '../../common/components/ComponentHeading';
import RecommendCarousel from './RecommendCarousel';

const RecommendedForYou = () => {
    return (
        <View>
          <ComponentHeading text="Recommended"/>
          <RecommendCarousel/>
        </View>
    )
}

export default RecommendedForYou

const styles = StyleSheet.create({})
