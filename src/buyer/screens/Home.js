import React from 'react'
import { StyleSheet, Text, FlatList, SectionList, View } from 'react-native'
import CarouselDisplay from '../components/Carousel';
import SubCategories from '../components/SubCategories';
import DealsOfTheDay from '../components/DealsOfTheDay';
import BuysOfTheMoment from '../components/BuysOfTheMoment';
import FeaturedBrands from '../components/FeaturedBrands';
import BestBuys from '../components/BestBuys';
import LoginScreen from '../../common/screens/LoginScreen';
// import {connect} from 'react-redux';
// const sectionList = [
//     {
//     data: [<CarouselDisplay />],
//     },
//       {
//       data:[<SubCategories/>],
//     },
//     {
//       data:[<DealsOfTheDay/>],
//     },
//     {
//         data:[<BuysOfTheMoment/>],
//     },
//     {
//         data:[<FeaturedBrands/>],
//     },
//     {
//         data:[<BestBuys/>],
//     },
// ]

const Home = () => {
    return <LoginScreen/>
    // return (
    //     <View style={{flex:1}}>
    //         <SectionList
            
    //     sections={sectionList}
    //     keyExtractor={(item, index) => item + index}
    //     renderItem={({ item }) => <>{item}</>}
    //     // renderSectionHeader={({ section: { title } }) => (
    //     //    title  &&<Text>{title}</Text>
    //     // )}
    // />
    //     </View>
    // )
}



export default Home

const styles = StyleSheet.create({})
