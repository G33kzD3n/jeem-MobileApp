import React, { useRef } from 'react';
import { Text, View, Dimensions, StyleSheet,TouchableWithoutFeedback,ImageBackground } from 'react-native';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from '../../utils/animation';
import ComponentHeading from '../../common/components/ComponentHeading';
import AppText from '../../common/components/AppText';
import colors from '../../config/colors';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * (3 / 4));

const carouselItems = [
    {
        title: "Item 1",
        text: "Text 1",
        image:'https://www.myjobquote.co.uk/assets/img/vinyl-flooring-costs-12.jpg'
    },
    {
        title: "Item 2",
        text: "Text 2",
        image:'https://www.myjobquote.co.uk/assets/img/vinyl-flooring-costs-12.jpg'
    },
    {
        title: "Item 3",
        text: "Text 3",
        image:'https://www.myjobquote.co.uk/assets/img/vinyl-flooring-costs-12.jpg'
    },
    {
        title: "Item 4",
        text: "Text 4",
        image:'https://www.myjobquote.co.uk/assets/img/vinyl-flooring-costs-12.jpg'
    },
    {
        title: "Item 5",
        text: "Text 5",
        image:'https://www.myjobquote.co.uk/assets/img/vinyl-flooring-costs-12.jpg'
    },
];

const FeatureProducts=()=>{
 const carousel = useRef(null);
function _renderItem({ item }) {
    return (
      <TouchableWithoutFeedback
            onPress={() => console.log(item)}
            style={
                styles.touchOpacity
            }
        >
        
            <ImageBackground source={{uri:item.image}}
                style={styles.itemContainer}
                >
                <View style={{ padding: 50 }}>
                    <AppText style={{ fontSize: 30,color:colors.primary1 }}>{item.title}</AppText>
                    <AppText style={{color:colors.white}}>{item.text}</AppText>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
  }
  
 
    return (
      <View>
        <ComponentHeading text='featured products'/>
        <Carousel
           ref={(carousel) => carousel = carousel}
          data={carouselItems}
          renderItem={_renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          // containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          loop
          autoplay
          // enableSnap={false}
        //   onSnapToItem={(index) => ({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
         useScrollView={true}          
        />
        {/* <Text style={styles.counter}
        >
          {this.state.index}
        </Text> */}
      </View>
    );
}
export default FeatureProducts

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius:10
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

