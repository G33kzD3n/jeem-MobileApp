import React from 'react'
import { StyleSheet, Text, FlatList, SectionList, View } from 'react-native'
import CarouselDisplay from '../components/Carousel';
import SubCategories from '../components/SubCategories';
import DealsOfTheDay from '../components/DealsOfTheDay';
import BuysOfTheMoment from '../components/BuysOfTheMoment';
import FeaturedBrands from '../components/FeaturedBrands';
import BestBuys from '../components/BestBuys';
import LoginScreen from '../../common/screens/LoginScreen';
import {connect} from 'react-redux';
import RecommendedForYou from '../components/RecommendedForYou';
import TopTrends from '../components/TopTrends';
import FeaturedProducts from '../components/FeaturedProducts';
const sectionList = [
    {
    data: [<CarouselDisplay />],
    },
      {
      data:[<SubCategories/>],
    },
    {
      data:[<DealsOfTheDay/>],
    },
    {
        data:[<BuysOfTheMoment/>],
    },
    {
        data:[<FeaturedBrands/>],
    },
    {
        data:[<BestBuys/>],
    },
    {
        data:[<RecommendedForYou/>],
    },
    {
        data:[<TopTrends/>],
    },
    {
        data:[<FeaturedProducts/>],
    },
    
]

const Home = () => {

    return (
        <View style={{flex:1}}>
            <SectionList
            
        sections={sectionList}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <>{item}</>}
        // renderSectionHeader={({ section: { title } }) => (
        //    title  &&<Text>{title}</Text>
        // )}
    />
        </View>
    )
}



export default Home

const styles = StyleSheet.create({})
