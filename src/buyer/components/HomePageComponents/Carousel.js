import React, { useState, useMemo, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	ImageBackground,
	TouchableWithoutFeedback,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { carouselAction } from '../../../../store/actions';
import { CAROUSEL } from '../../../../store/actions/actionTypes';
import * as SplashScreen from 'expo-splash-screen';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';

const width = Dimensions.get('window').width;
// const carouselItems = [
// 	{
// 		title: 'Item 1',
// 		text: 'Text 1',
// 		image:
// 			'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg',
// 	},
// 	{
// 		title: 'Item 2',
// 		text: 'Text 2',
// 		image:
// 			'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg',
// 	},
// 	{
// 		title: 'Item 3',
// 		text: 'Text 3',
// 		image:
// 			'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg',
// 	},
// 	{
// 		title: 'Item 4',
// 		text: 'Text 4',
// 		image:
// 			'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg',
// 	},
// 	{
// 		title: 'Item 5',
// 		text: 'Text 5',
// 		image:
// 			'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg',
// 	},
// ];

_renderItem = ({ item, index }) => {
	return (
		<TouchableWithoutFeedback
			onPress={() => console.log(item)}
			style={styles.touchOpacity}
		>
			<ImageBackground
				source={{ uri: item.carouselImage }}
				style={styles.background}
			>
				<View style={{ padding: 50 }}>
					<AppText style={{ fontSize: 30, color: colors.primary1 }}>
						{item.carouselHeading}
					</AppText>
					<AppText style={{ color: colors.white }}>
						{item.carouselSubHeading}
					</AppText>
				</View>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
};

function pagination(activeIndex, length) {
	// console.log(length);
	return (
		<Pagination
			dotsLength={length}
			activeDotIndex={activeIndex}
			containerStyle={{ paddingVertical: 0, bottom: 15 }}
			dotStyle={styles.dotStyle}
			inactiveDotStyle={
				{
					// Define styles for inactive dots here
				}
			}
			inactiveDotOpacity={0.6}
			inactiveDotScale={0.7}
		/>
	);
}

const CarouselDisplay = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const carouselItems = useSelector((state) => state.home.carousel);
	const dispatch = useDispatch();
	useEffect(() => {
		if (carouselItems) {
			hideSplashScreen();
		}
	}, [carouselItems]);

	useEffect(() => {
		dispatch(carouselAction(CAROUSEL)); //get called if the user refreshes the page to get data
		showSplashScreen();
	}, []);

	const hideSplashScreen = async () => {
		await SplashScreen.hideAsync();
	};
	const showSplashScreen = async () => {
		await SplashScreen.preventAutoHideAsync();
	};
	return (
		<>
			{useMemo(
				() => (
					<>
						{carouselItems && (
							<Carousel
								containerCustomStyle={styles.carousel}
								layout={'default'}
								data={carouselItems}
								sliderWidth={width}
								itemWidth={width}
								autoplayInterval={4000}
								// enableSnap={false}
								autoplay
								loop
								removeClippedSubviews
								inactiveSlideScale={1}
								loopClonesPerSide={carouselItems.length}
								renderItem={_renderItem}
								onSnapToItem={(index) => setActiveIndex(index)}
							/>
						)}
					</>
				),
				[_renderItem, carouselItems]
			)}

			<View style={styles.pagination}>
				{pagination(activeIndex, carouselItems ? carouselItems.length : 0)}
			</View>
		</>
	);
};

export default CarouselDisplay;

const styles = StyleSheet.create({
	carousel: {
		flexGrow: 0,
		height: 310,
		paddingVertical: 0,
	},
	dotStyle: {
		width: 8,
		height: 8,
		borderRadius: 5,
		marginHorizontal: 1,
		backgroundColor: colors.primaryShade22,
	},
	background: {
		flex: 1,
	},
	touchOpacity: {
		borderRadius: 5,
		height: '100%',
	},
});
