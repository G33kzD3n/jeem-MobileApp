import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Card from '../../../common/components/Card';
import ComponentHeading from '../../../common/components/ComponentHeading';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getTagsProductAction } from '../../../../store/actions/homeAction';
import { DEALS_OF_THE_DAY } from '../../../../store/actions/actionTypes';
import { apiUrlImageProducts } from '../../../config/config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import i18n from '../../../languages/i18n';

const DealsOfTheDay = () => {
	const navigation = useNavigation();
	const handleClick = () => {
		navigation.navigate('SubCategoryProduct', {
			name: i18n.t('homeScreen.Deals Of The Day'),
			id: 1,
			apiName: 'Tag',
			totalItems: undefined
		}); //navigate with params
	};

	const getDeals = useSelector(state => state.home.dealsOfTheDay);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			getTagsProductAction(DEALS_OF_THE_DAY, { id: 1, page: 0, limit: 10 })
		);
	}, []);

	const productView = id => {
		navigation.navigate('ProductDetails', { id });
	};

	if (!getDeals) return <></>;

	return (
		<View>
			<ComponentHeading
				text={i18n.t('homeScreen.Deals Of The Day')}
				more={getDeals.totalRecords > 10 && i18n.t('homeScreen.View More')}
				onPress={() => handleClick()}
			/>
			<FlatList
				data={getDeals.data}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(data, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={{ paddingHorizontal: 5, width: 170 }}>
						<TouchableOpacity onPress={() => productView(item.id)}>
							<Card
								image={
									apiUrlImageProducts +
									item.productName +
									'-' +
									item.productSku +
									'/' +
									item.productImages[0]
								}
								brand={item.productName}
								title={`${i18n.t('homeScreen.Flat')} ${
									item.productDiscount
								}% ${i18n.t('homeScreen.Off')}`}
								subTitle={i18n.t('homeScreen.Limited Time Offer')}
							/>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
};

export default DealsOfTheDay;

const styles = StyleSheet.create({});
