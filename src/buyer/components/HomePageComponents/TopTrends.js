import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ComponentHeading from '../../../common/components/ComponentHeading';
import BestBuys from './BestBuys';
import SimpleCard from '../../../common/components/SimpleCard';

const data =
{
    title: '40-60% Off',
    brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/500px-Amazon_Web_Services_Logo.svg.png',
    image: 'https://imgmedia.lbb.in/media/2020/04/5ea6933a96c7e66079ec5780_1587974970911.jpg'
}

const TopTrends = () => {
    return (
        <View style={styles.parent}>
          <ComponentHeading text='top trends'/>
            <View style={styles.row}>
                <View style={styles.child}>
                    <SimpleCard image={data.image} textStyle={styles.text} logoStyle={styles.logo} imageStyle={styles.image} brandLogo={data.brandLogo}  title={data.title} />
                </View>
                <View style={styles.child}>
                    <SimpleCard image={data.image} textStyle={styles.text} logoStyle={styles.logo} imageStyle={styles.image} brandLogo={data.brandLogo} title={data.title} />
                </View>
                <View style={styles.child}>
                    <SimpleCard image={data.image} textStyle={styles.text} logoStyle={styles.logo} imageStyle={styles.image} brandLogo={data.brandLogo} title={data.title} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.child}>
                    <SimpleCard image={data.image} textStyle={styles.text} logoStyle={styles.logo} imageStyle={styles.image} brandLogo={data.brandLogo} title={data.title} />
                </View>
                <View style={styles.child}>
                    <SimpleCard image={data.image} textStyle={styles.text} logoStyle={styles.logo} imageStyle={styles.image} brandLogo={data.brandLogo} title={data.title} />
                </View>
                <View style={styles.child}>
                    <SimpleCard image={data.image} textStyle={styles.text} logoStyle={styles.logo} imageStyle={styles.image} brandLogo={data.brandLogo} title={data.title} />
                </View>
            </View>
        </View>
    )
}

export default TopTrends

const styles = StyleSheet.create({
    text:{
      bottom:5,
    },
    parent:{
        
    },
    row:{
       flexDirection:'row',
       paddingBottom:10,
       flex:1,
       
    },
    child:{
        flex:3,
        // width:'50%',
        paddingHorizontal:5,
      

    },
    image:{
        height:120,
        marginBottom:5,
        borderTopRightRadius:5,
        borderTopLeftRadius:5
        
        
    },
    logo:{
        height:30,
        
    }
})
