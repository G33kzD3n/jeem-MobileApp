import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SimpleCard from '../../../common/components/SimpleCard';
import ComponentHeading from '../../../common/components/ComponentHeading';
import colors from '../../../config/colors';

const data =
{
    title: 'Bricks',
    subTitle: 'Under 799',
    image: 'https://hi-static.z-dn.net/files/d4f/57a488747c778f1d7006510cf13a9229.jpg'
}



const BestBuys = () => {
    return (
        <View style={styles.parent}>
          <ComponentHeading text='best buys'/>
            <View style={styles.row}>
                <View style={styles.child}>
                    <SimpleCard image={data.image} subTitle={data.subTitle} title={data.title} />
                </View>
                <View style={styles.child}>
                    <SimpleCard image={data.image} subTitle={data.subTitle} title={data.title} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.child}>
                    <SimpleCard image={data.image} subTitle={data.subTitle} title={data.title} />
                </View>
                <View style={styles.child}>
                    <SimpleCard image={data.image} subTitle={data.subTitle} title={data.title} />
                </View>
            </View>
        </View>
    )
}

export default BestBuys

const styles = StyleSheet.create({
    parent:{
        
    },
    row:{
       flexDirection:'row',
       paddingBottom:10,
      
       
    },
    child:{
        width:'50%',
        paddingHorizontal:8

    }
})
