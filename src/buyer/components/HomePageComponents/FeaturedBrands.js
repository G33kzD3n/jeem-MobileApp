import React, { useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableWithoutFeedback,
} from 'react-native';
import ComponentHeading from '../../../common/components/ComponentHeading';
import FeaturedCard from '../../../common/components/FeaturedCard';
import { getSellerWithTagAction } from '../../../../store/actions/homeAction';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { GET_SELLER_WITH_TAGS } from '../../../../store/actions/actionTypes';
import { apiUrlImage } from '../../../config/config';
// import { apiUrlImageProducts } from '../../../config/config';

const data = [
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
		image:
			'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
		image:
			'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
		image:
			'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
		image:
			'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
		image:
			'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
		image:
			'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
		image:
			'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
		image:
			'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
		image:
			'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
		image:
			'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg',
	},
	{
		title: 'Flat 30% Off',
		subTitle: 'Limited Time Offer',
		brandLogo: 'https://www.pngmart.com/files/10/Audi-Logo-PNG-Photos.png',
		image:
			'https://www.mediashower.com/img/C790E9C2-1DDA-11E8-942A-F74ECCDF3A90/supplies%20pic%201%204-2-18_600x.jpg',
	},
];

const FeaturedBrands = () => {
	const navigation = useNavigation();
	const handleClick = () => {
		navigation.navigate('SubCategoryProduct', {
			name: 'Featured Products',
			id: 4,
			apiName: 'Tag',
			totalItems: undefined,
		}); //navigate with params
	};

	const getSellers = useSelector((state) => state.home.getSellers);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			getSellerWithTagAction(GET_SELLER_WITH_TAGS, { page: 0, limit: 10 })
		);
	}, []);

	const productView = (id) => {
		navigation.navigate('ProductDetails', { id });
	};

	if (!getSellers) return <></>;
	// console.log(getSellers, '>>>>>>>>>:::::::');

	return (
		<View>
			<ComponentHeading
				text="Featured Brands"
				more={getSellers.totalRecords > 10 && 'View More'}
				// more='View More'
				onPress={() => handleClick()}
			/>
			<FlatList
				data={getSellers.data}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(data, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={{ paddingHorizontal: 5, width: 210 }}>
						<TouchableWithoutFeedback onPress={() => console.log(item)}>
							<FeaturedCard
								title={item.tagName}
								sellerName={item.name}
								subTitle='Limited Time Offer'
								brandLogo={apiUrlImage+item.logo}
								image={apiUrlImage + 'tags/'+item.tagImage}
							/>
						</TouchableWithoutFeedback>
					</View>
				)}
			/>
		</View>
	);
};

export default FeaturedBrands;

const styles = StyleSheet.create({});
