import React, { useEffect } from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity
} from 'react-native';
import ComponentHeading from '../../../common/components/ComponentHeading';
import FeaturedCard from '../../../common/components/FeaturedCard';
import { getSellerWithTagAction } from '../../../../store/actions/homeAction';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { GET_SELLER_WITH_TAGS } from '../../../../store/actions/actionTypes';
import { apiUrlImage } from '../../../config/config';
import i18n from '../../../languages/i18n';
// import { apiUrlImageProducts } from '../../../config/config';

const FeaturedBrands = () => {
	const navigation = useNavigation();

	const showMore = () => {
		navigation.navigate('AllBrands', {
			name: i18n.t('homeScreen.Featured Brands'),
			apiName: 'Seller',
			totalItems: undefined
		}); //navigate with params
	};

	const getSellers = useSelector(state => state.home.getSellers);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			getSellerWithTagAction(GET_SELLER_WITH_TAGS, { page: 0, limit: 10 })
		);
	}, []);

	const showSellerProducts = item => {
		navigation.navigate('SellerProduct', {
			name: item.name,
			id: item.id,
			apiName: 'Seller'
			// total: undefined,
		}); //navigate with params
	};

	if (!getSellers) return <></>;
	// console.log(getSellers, '>>>>>>>>>:::::::');

	return (
		<View>
			<ComponentHeading
				text={i18n.t('homeScreen.Featured Brands')}
				more={getSellers.totalRecords > 10 && i18n.t('homeScreen.View More')}
				// more='View More'
				onPress={() => showMore()}
			/>
			<FlatList
				data={getSellers.data}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(data, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={{ paddingHorizontal: 5, width: 210 }}>
						<TouchableOpacity onPress={() => showSellerProducts(item)}>
							<FeaturedCard
								title={item.tagName}
								sellerName={item.name}
								subTitle={i18n.t('homeScreen.Limited Time Offer')}
								brandLogo={apiUrlImage + item.logo}
								image={apiUrlImage + 'tags/' + item.tagImage}
							/>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
};

export default FeaturedBrands;

const styles = StyleSheet.create({});
