import React,{useState,useEffect} from 'react';
import { StyleSheet, SectionList, View } from 'react-native';
import CarouselDisplay from '../components/HomePageComponents/Carousel';
import SubCategories from '../components/HomePageComponents/SubCategories';
import DealsOfTheDay from '../components/HomePageComponents/DealsOfTheDay';
import BuysOfTheMoment from '../components/HomePageComponents/BuysOfTheMoment';
import FeaturedBrands from '../components/HomePageComponents/FeaturedBrands';
import BestBuys from '../components/HomePageComponents/BestBuys';
import RecommendedForYou from '../components/HomePageComponents/RecommendedForYou';
import TopTrends from '../components/HomePageComponents/TopTrends';
import FeaturedProducts from '../components/HomePageComponents/FeaturedProducts';
import { StatusBar } from 'expo-status-bar';
import Loader from '../../common/components/Loader';
import { useIsFocused } from '@react-navigation/native';

const sectionList = [
	{
		data: [<CarouselDisplay />]
	},
	{
		data: [<SubCategories />]
	},
	{
		data: [<DealsOfTheDay />]
	},
	{
		data: [<BuysOfTheMoment />]
	},
	{
		data: [<FeaturedBrands />]
	},
	{
		data: [<BestBuys />]
	},
	{
		data: [<RecommendedForYou />]
	},
	{
		data: [<TopTrends />]
	},
	{
		data: [<FeaturedProducts />]
	}
];

const Home = () => {
	const [loading, setLoading] = useState(true);
	const isFocused = useIsFocused();
	useEffect(() => {
		setLoading(false);
	}, [isFocused]);
	return (
		<View style={{ flex: 1 }}>
			<>
				{loading && <Loader />}
				<StatusBar style="light" />
				<SectionList
					sections={sectionList}
					keyExtractor={(item, index) => item + index}
					renderItem={({ item }) => <>{item}</>}
					// renderSectionHeader={({ section: { title } }) => (
					//    title  &&<Text>{title}</Text>
					// )}
				/>
			</>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
