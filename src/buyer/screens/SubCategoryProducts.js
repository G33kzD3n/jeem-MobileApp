import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProductCard from '../../common/components/ProductCard';
import colors from '../../config/colors';
import { useSelector, useDispatch } from 'react-redux';
import { productsAction } from '../../../store/actions';
import {
	GET_PRODUCTS_FOR_BUYER,
	REMOVE_PRODUCTS_FROM_STORE,
} from '../../../store/actions/actionTypes';
import Loader from '../../common/components/Loader';
import { getTagsProductAction } from '../../../store/actions/homeAction';

const SubCategoryProducts = ({ route, navigation }) => {
	const { id, apiName } = route.params;

	const [flatListParams, setFlatListParams] = useState({
		loading: false,
		data: [],
		page: 0,
		limit: 10,
		// totalRecords: '0',
		error: null,
		refreshing: false,
	});
	const productData = useSelector((state) => state.home.products);

	const dispatch = useDispatch();

	const handelDispatchCalls = (apiName) => {
		switch (apiName) {
			case 'Tag':
				return dispatch(
					getTagsProductAction(GET_PRODUCTS_FOR_BUYER, {
						id: id,
						page: flatListParams.page,
						limit: flatListParams.limit,
					})
				);

			default:
				dispatch(
					productsAction(GET_PRODUCTS_FOR_BUYER, {
						id: id,
						page: flatListParams.page,
						limit: flatListParams.limit,
					})
				); //get called if the user refreshes the page to get data
		}
	};

	useEffect(() => {
		handelDispatchCalls(apiName);
		return () => dispatch({ type: REMOVE_PRODUCTS_FROM_STORE });
	}, [apiName]);

	useEffect(() => {
		//set data from api to state for inital render or as data changes in productData

		if (
			productData &&
			productData.page === flatListParams.page &&
			flatListParams.data.length < productData.totalRecords
		) {
			navigation.setParams({ totalItems: productData.totalRecords.toString() }); //set total item for header
			setFlatListParams({
				...flatListParams,
				// totalRecords: productData.totalRecords,
				page: productData.page,
				loading: false,
				refreshing: false,
				data: [...flatListParams.data, ...productData.products],
			});
		}
	}, [productData]);

	const renderFooter = () => {
		if (!flatListParams.loading) return null;
		return <Loader screen="simple" />;
	};

	const handleRefresh = () => {
		setFlatListParams({
			...flatListParams,
			page: 0,
			refreshing: true,
			data: [],
		});
		handelDispatchCalls(apiName);
	};

	const handleLoadMore = () => {
		if (flatListParams.data.length < productData.totalRecords) {
			setFlatListParams({
				...flatListParams,
				page: productData.page + 1,
				loading: true,
			});
			handelDispatchCalls(apiName);
		}
	};

	if (!productData)
		//means data not yet retreived
		return <Loader />;
	return (
		<View style={styles.screen}>
			<FlatList
				refreshing={flatListParams.refreshing}
				onRefresh={handleRefresh} //call a function
				data={flatListParams.data}
				showsVerticalScrollIndicator={false}
				initialNumToRender={6}
				removeClippedSubviews={true}
				numColumns={2}
				keyExtractor={(data, index) => index.toString()}
				ListFooterComponent={renderFooter}
				onEndReached={handleLoadMore}
				onEndReachedThreshold={0.5}
				renderItem={({ item }) => (
					<View style={styles.outerView}>
						<ProductCard item={item} />
					</View>
				)}
			/>
		</View>
	);
};

export default SubCategoryProducts;

const styles = StyleSheet.create({
	outerView: {
		flex: 1,
		paddingHorizontal: 3,
		paddingBottom: 5,
	},
	screen: {
		backgroundColor: colors.primaryShade24,
		flex: 1,
	},
});
