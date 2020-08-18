import React from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import Card from '../../common/components/Card';
import AppText from '../../common/components/AppText';
import colors from '../../config/colors';

const data = [
    {
        title: 'Flat 30% Off',
        subTitle:'Limited Time Offer',
        brand:'Levis',
        image: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        title: 'Flat 30% Off',
        subTitle:'Limited Time Offer',
        brand:'Levis',
        image: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        title: 'Flat 30% Off',
        subTitle:'Limited Time Offer',
        brand:'Levis',
        image: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        title: 'Flat 30% Off',
        subTitle:'Limited Time Offer',
        brand:'Levis',
        image: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        title: 'Flat 30% Off',
        subTitle:'Limited Time Offer',
        brand:'Levis',
        image: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        title: 'Flat 30% Off',
        subTitle:'Limited Time Offer',
        brand:'Levis',
        image: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        title: 'Flat 30% Off',
        subTitle:'Limited Time Offer',
        brand:'Levis',
        image: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        title: 'Flat 30% Off',
        subTitle:'Limited Time Offer',
        brand:'Levis',
        image: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        title: 'Flat 30% Off',
        subTitle:'Limited Time Offer',
        brand:'Levis',
        image: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        title: 'Flat 30% Off',
        subTitle:'Limited Time Offer',
        brand:'Levis',
        image: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        title: 'Flat 30% Off',
        subTitle:'Limited Time Offer',
        brand:'Levis',
        image: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
  


]


const DealsOfTheDay = () => {
    return (
        <View>
        <AppText style={styles.heading}>DEALS OF THE DAY</AppText>
           <FlatList
           data={data}
           horizontal
           showsHorizontalScrollIndicator={false}
           keyExtractor={(data,index)=>index.toString()}
           renderItem={({item})=>
           <View style={{paddingHorizontal:5,width:170}}>
           <TouchableOpacity  onPress={() => console.log(item)}>
              <Card image={item.image} brand={item.brand} title={item.title} subTitle={item.subTitle}/>
           </TouchableOpacity>
       </View>
           }/>
        </View>
    )
}

export default DealsOfTheDay

const styles = StyleSheet.create({
    heading:{
        color:colors.primary2,
        fontSize:14,
        paddingTop:13,
        paddingBottom:7,
        paddingLeft:8,
        textTransform:'uppercase'

    }
})
