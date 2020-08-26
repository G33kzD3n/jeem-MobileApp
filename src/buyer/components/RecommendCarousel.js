import React, { useState, useMemo } from 'react'
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AppText from '../../common/components/AppText';
import colors from '../../config/colors';
import { scrollInterpolator, animatedStyles } from '../../utils/animation';


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
const carouselItems = [
    {
        title: "Item 1",
        text: "Text 1",
        image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg'
    },
    {
        title: "Item 2",
        text: "Text 2",
        image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg'
    },
    {
        title: "Item 3",
        text: "Text 3",
        image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg'
    },
    {
        title: "Item 4",
        text: "Text 4",
        image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg'
    },
    {
        title: "Item 5",
        text: "Text 5",
        image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7043cb98-129e-49b8-bb13-7db7e4eb3eb7-hempcrete-%20credit%20Iso%20Hemp.jpg'
    },
];

const _renderItemCarousel = ({ item, index }) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => console.log(item)}
            style={
                styles.touchOpacity
            }
        >
            <ImageBackground source={{ uri: item.image }}
                style={styles.background}>
            </ImageBackground>
            <View style={{ backgroundColor:'white',paddingTop:10}}>
                    <AppText style={{ fontSize: 30, color: colors.primary1,textAlign:'center' }}>{item.title}</AppText>
                    <AppText style={{ color: colors.white,textAlign:'center' }}>{item.text}</AppText>
                </View>
        </TouchableWithoutFeedback>

    )
}



const RecommendCarousel = () => {


    return (

        <>

            {useMemo(() => (
                <>
                    {console.log('in rec carousel')}
                    <Carousel
                        data={carouselItems}
                        layout={'stack'}
                        renderItem={_renderItemCarousel}
                        enableMomentum={false}
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
            ), [_renderItem])}
        </>
    )
}

export default RecommendCarousel

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
        borderRadius:50,
        height: '100%',
        marginRight:10
    }

})
