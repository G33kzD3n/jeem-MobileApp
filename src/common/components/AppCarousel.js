import React, { useState, useMemo } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	ImageBackground,
	TouchableWithoutFeedback,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AppText from './AppText';
import colors from '../../config/colors';

const width = Dimensions.get('window').width;
const carouselItems = [
	{
		title: 'Item 1',
		text: 'Text 1',
		image:
			'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg',
	},
	{
		title: 'Item 2',
		text: 'Text 2',
		image:
			'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg',
	},
	{
		title: 'Item 3',
		text: 'Text 3',
		image:
			'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg',
	},
	{
		title: 'Item 4',
		text: 'Text 4',
		image:
			'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg',
	},
	{
		title: 'Item 5',
		text: 'Text 5',
		image:
			'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg',
	},
];

_renderProduct = ({ item, index }) => {
	return (
		<TouchableWithoutFeedback
			onPress={() => console.log(item)}
			style={styles.touchOpacity}
		>
			<ImageBackground source={{ uri: item }} style={styles.background}>
				{/* <View style={{ padding: 50 }}>
                    <AppText style={{ fontSize: 30,color:colors.primary1 }}>{item.title}</AppText>
                    <AppText style={{color:colors.white}}>{item.text}</AppText>
                </View> */}
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
};

function pagination(activeIndex, data) {
	return (
		<Pagination
			dotsLength={data.length}
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

const AppCarousel = ({ height, data }) => {
	// console.log(data);
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<>
			{useMemo(
				() => (
					<>
						{console.log('in carousel Product')}
						<Carousel
							containerCustomStyle={[styles.carousel, height]}
							layout={'default'}
							data={data}
							sliderWidth={width}
							itemWidth={width}
							autoplayInterval={4000}
							// enableSnap={false}
							autoplay
							loop
							removeClippedSubviews
							inactiveSlideScale={1}
							// loopClonesPerSide={carouselItems.length}
							renderItem={_renderProduct}
							onSnapToItem={(index) => setActiveIndex(index)}
						/>
					</>
				),
				[_renderProduct]
			)}
			<View style={styles.pagination}>{pagination(activeIndex, data)}</View>
		</>
	);
};

export default AppCarousel;

const styles = StyleSheet.create({
	carousel: {
		// flexGrow: 0,
		// height:310,
		paddingVertical: 0,
	},
	dotStyle: {
		width: 8,
		height: 8,
		borderRadius: 5,
		marginHorizontal: 1,
		backgroundColor: 'rgba(255, 255, 255, 0.92)',
	},
	background: {
		flex: 1,
	},
	touchOpacity: {
		borderRadius: 5,
		height: '100%',
	},
});
