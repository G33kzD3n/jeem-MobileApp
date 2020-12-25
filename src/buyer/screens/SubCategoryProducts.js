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

const SubCategoryProducts = ({ route }) => {
	route.params.total = 10632; // set the total items for header
	const { id } = route.params;
	// const { subCategoryName } = route.params;
	const [refreshing, setRefreshing] = useState(false);
	const productData = useSelector((state) => state.home.products);
	const [loading, setLoading] = useState(false);
	// console.log(productData, '>>>>>>>>>>>>>>>>>>>>>>>>>', id);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productsAction(GET_PRODUCTS_FOR_BUYER, id)); //get called if the user refreshes the page to get data
		return () => dispatch({ type: REMOVE_PRODUCTS_FROM_STORE });
	}, []);

	if (!productData)
		//means data not yet retreived
		return <Loader />;

	return (
		<View style={styles.screen}>
			<FlatList
				refreshing={refreshing}
				onRefresh={() => data} //call a function
				data={productData}
				showsVerticalScrollIndicator={false}
				initialNumToRender={6}
				removeClippedSubviews={true}
				numColumns={2}
				keyExtractor={(data, index) => index.toString()}
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
