import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import { useSelector, useDispatch } from 'react-redux';
import { productsAction } from '../../../store/actions';
import {
	GET_PRODUCTS_FOR_BUYER,
	GET_SELLER_WITH_TAGS,
} from '../../../store/actions/actionTypes';
import Loader from '../../common/components/Loader';
import { getSellerWithTagAction } from '../../../store/actions/homeAction';
import FeaturedCard from '../../common/components/FeaturedCard';
import { apiUrlImage } from '../../config/config';

const AllBrands = ({ route, navigation }) => {
	const { id, apiName } = route.params;

	const [flatListParams, setFlatListParams] = useState({
		loading: false,
		data: [],
		page: 0,
		limit: 10,
		// totalRecords: '0',
		error: null,
		refreshing: false
	});
	const getSellers = useSelector(state => state.home.getSellers);
	const dispatch = useDispatch();

	const handelDispatchCalls = apiName => {
		switch (apiName) {
			case 'Seller':
				return dispatch(
					getSellerWithTagAction(GET_SELLER_WITH_TAGS, {
						page: flatListParams.page,
						limit: flatListParams.limit
					})
				);
			default:
				dispatch(
					productsAction(GET_PRODUCTS_FOR_BUYER, {
						id: id,
						page: flatListParams.page,
						limit: flatListParams.limit
					})
				); //get called if the user refreshes the page to get data
		}
	};

	// useEffect(() => {
	// 	handelDispatchCalls(apiName);
	// 	return () => dispatch({ type: REMOVE_SELLER_WITH_TAGS });
	// }, [apiName]);

	useEffect(() => {
		//set data from api to state for inital render or as data changes in productData

		if (
			getSellers &&
			getSellers.page === flatListParams.page &&
			flatListParams.data.length < getSellers.totalRecords
		) {
			navigation.setParams({ totalItems: getSellers.totalRecords.toString() }); //set total item for header
			setFlatListParams({
				...flatListParams,
				// totalRecords: productData.totalRecords,
				page: getSellers.page,
				loading: false,
				refreshing: false,
				data: [...flatListParams.data, ...getSellers.data]
			});
		}
	}, [getSellers]);

	const renderFooter = () => {
		if (!flatListParams.loading) return null;
		return <Loader screen="simple" />;
	};

	const handleRefresh = apiName => {
		setFlatListParams({
			...flatListParams,
			page: 0,
			refreshing: true,
			data: []
		});
		handelDispatchCalls(apiName);
	};

	const handleLoadMore = apiName => {
		if (flatListParams.data.length < getSellers.totalRecords) {
			setFlatListParams({
				...flatListParams,
				page: getSellers.page + 1,
				loading: true
			});
			handelDispatchCalls(apiName);
		}
	};

	const showSellerProducts = item => {
		navigation.navigate('SellerProduct', {
			name: item.name,
			id: item.id,
			apiName: 'Seller'
			// total: undefined,
		}); //navigate with params
	};

	if (!getSellers)
		//means data not yet retreived
		return <Loader />;
	return (
		<View style={styles.screen}>
			<FlatList
				refreshing={flatListParams.refreshing}
				onRefresh={() => handleRefresh(apiName)} //call a function
				data={flatListParams.data}
				showsVerticalScrollIndicator={false}
				initialNumToRender={6}
				removeClippedSubviews={true}
				numColumns={2}
				keyExtractor={(data, index) => index.toString()}
				ListFooterComponent={renderFooter}
				onEndReached={() => handleLoadMore(apiName)}
				onEndReachedThreshold={0.5}
				renderItem={({ item }) => (
					<View style={{ paddingHorizontal: 5, width: 210 }}>
						<TouchableOpacity onPress={() => showSellerProducts(item)}>
							<FeaturedCard
								title={item.tagName}
								sellerName={item.name}
								subTitle="Limited Time Offer"
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

export default AllBrands;

const styles = StyleSheet.create({
	outerView: {
		flex: 1,
		paddingHorizontal: 3,
		paddingBottom: 5
	},
	screen: {
		backgroundColor: colors.primaryShade24,
		flex: 1
	}
});
