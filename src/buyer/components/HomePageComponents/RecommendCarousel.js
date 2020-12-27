import React, { useMemo } from 'react';
import { StyleSheet, View, Dimensions, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AppText from '../../../common/components/AppText';
import colors from '../../../config/colors';
// import { scrollInterpolator, animatedStyles } from '../../../utils/animation';
import { apiUrlImage } from '../../../config/config';
import { useNavigation } from '@react-navigation/native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
// const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const RecommendCarousel = ({ allTags }) => {
	const navigation = useNavigation();
	const handleClick = (item) => {
		navigation.navigate('SubCategoryProduct', {
			name: item.tagName,
			id: item.id,
			apiName: 'Tag',
			totalItems: undefined,
		}); //navigate with params
	};
	const _renderItemCarousel = ({ item, index }) => {
		return (
			<TouchableWithoutFeedback
				onPress={() => handleClick(item)}
				style={styles.touchOpacity}
			>
				<ImageBackground
					source={{ uri: apiUrlImage + 'tags/' + item.tagImage }}
					style={styles.background}
				></ImageBackground>
				<View style={{ backgroundColor: 'white', paddingTop: 10 }}>
					<AppText
						style={{
							fontSize: 30,
							color: colors.primary1,
							textAlign: 'center',
						}}
					>
						{item.tagName}
					</AppText>
					<AppText style={{ color: colors.white, textAlign: 'center' }}>
						{item.tagName}
					</AppText>
				</View>
			</TouchableWithoutFeedback>
		);
	};

	return (
		<>
			{useMemo(
				() => (
					<>
						{console.log('in rec carousel')}
						<Carousel
							data={allTags}
							layout={'stack'}
							renderItem={_renderItemCarousel}
							activeSlideAlignment={'end'}
							sliderWidth={SLIDER_WIDTH}
							itemWidth={ITEM_WIDTH}
							containerCustomStyle={styles.carousel}
							inactiveSlideShift={0}
							autoplayInterval={5000}
							autoplay
							loop
						/>
					</>
				),
				[_renderItem]
			)}
		</>
	);
};

export default RecommendCarousel;

const styles = StyleSheet.create({
	carousel: {
		flexGrow: 0,
		height: 310,
		paddingVertical: 0,
	},
	background: {
		flex: 1,
	},
	touchOpacity: {
		borderRadius: 50,
		height: '100%',
		marginRight: 10,
	},
});
