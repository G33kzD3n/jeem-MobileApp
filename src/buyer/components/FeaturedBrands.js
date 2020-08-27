import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback } from 'react-native'
import ComponentHeading from '../../common/components/ComponentHeading';
import FeaturedCard from '../../common/components/FeaturedCard';

const data = [
    {
        title: 'Flat 30% Off',
        subTitle: 'Limited Time Offer',
        brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
        image: 'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg'
    },
    {
        title: 'Flat 30% Off',
        subTitle: 'Limited Time Offer',
        brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
        image: 'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg'
    },
    {
        title: 'Flat 30% Off',
        subTitle: 'Limited Time Offer',
        brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
        image: 'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg'
    },
    {
        title: 'Flat 30% Off',
        subTitle: 'Limited Time Offer',
        brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
        image: 'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg'
    },
    {
        title: 'Flat 30% Off',
        subTitle: 'Limited Time Offer',
        brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
        image: 'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg'
    },
    {
        title: 'Flat 30% Off',
        subTitle: 'Limited Time Offer',
        brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
        image: 'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg'
    },
    {
        title: 'Flat 30% Off',
        subTitle: 'Limited Time Offer',
        brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
        image: 'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg'
    },
    {
        title: 'Flat 30% Off',
        subTitle: 'Limited Time Offer',
        brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
        image: 'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg'
    },
    {
        title: 'Flat 30% Off',
        subTitle: 'Limited Time Offer',
        brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
        image: 'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg'
    },
    {
        title: 'Flat 30% Off',
        subTitle: 'Limited Time Offer',
        brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
        image: 'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg'
    },
    {
        title: 'Flat 30% Off',
        subTitle: 'Limited Time Offer',
        brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
        image: 'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg'
    },



]
// const title = 'Flat 30% Off'
// const subTitle = 'Limited Time Offer'
// const brandLogo = 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png'
// const image = 'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg'

const FeaturedBrands = () => {
    return (
        <View>

            <ComponentHeading text='Featured Brands' />
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(data, index) => index.toString()}
                renderItem={({ item }) =>
                    <View style={{ paddingHorizontal: 5, width: 210 }}>
                        <TouchableWithoutFeedback onPress={() => console.log(item)}>
                            <FeaturedCard title={item.title} subTitle={item.subTitle} brandLogo={item.brandLogo} image={item.image} />
                        </TouchableWithoutFeedback>
                    </View>
                } />
        </View>
    )
}

export default FeaturedBrands

const styles = StyleSheet.create({})
