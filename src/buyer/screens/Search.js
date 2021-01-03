import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Keyboard } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import { useRef, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { searchAction } from '../../../store/actions';
import { CLEAR_SEARCH, SEARCH } from '../../../store/actions/actionTypes';
import ProductCard from '../../common/components/ProductCard';
import Loader from '../../common/components/Loader';
import AppText from '../../common/components/AppText';

const Search = () => {
	const [loading, setLoading] = useState(false);
	const textRef = useRef();
	const isFocused = useIsFocused();
	const [searchTerm, setSearchTerm] = useState('');
	const [flatListParams, setFlatListParams] = useState({
		loading: false,
		data: [],
		page: 0,
		limit: 10,
		// totalRecords: '0',
		error: null,
		refreshing: false,
	});
	const dispatch = useDispatch();
	const searchResults = useSelector((state) => state.home.search);
	useEffect(() => {
		textRef.current.focus();
		return () => dispatch({ type: CLEAR_SEARCH });
	}, [isFocused]);

	useEffect(() => {
		//set data from api to state for inital render or as data changes in productData
		if(searchResults && searchResults.data === 'No Records found'){
			setLoading(false);
		}

		if (
			searchResults &&
			searchResults.page === flatListParams.page &&
			flatListParams.data.length < searchResults.totalRecords
		) {
			setLoading(false);
			// navigation.setParams({
			// 	totalItems: searchResults.totalRecords.toString(),
			// }); //set total item for header
			setFlatListParams({
				...flatListParams,
				// totalRecords: productData.totalRecords,
				page: searchResults.page,
				loading: false,
				refreshing: false,
				data: [...flatListParams.data, ...searchResults.data],
			});
		}
		return () => Keyboard.dismiss();
	}, [searchResults]);

	const renderFooter = () => {
		if (!flatListParams.loading) return null;
		return <Loader screen="simple" />;
	};

	const handleSubmit = (searchItem) => {
		dispatch({ type: CLEAR_SEARCH });
		setFlatListParams({
		loading: false,
		data: [],
		page: 0,
		limit: 10,
		// totalRecords: '0',
		error: null,
		refreshing: false,
	})
		setLoading(true);
		dispatch(
			searchAction(SEARCH, {
				searchItem: searchItem,
				page: flatListParams.page,
				limit: flatListParams.limit,
			})
		);
	};
	const handleRefresh = () => {
		setFlatListParams({
			...flatListParams,
			page: 0,
			refreshing: true,
			data: [],
		});
		handleSubmit(searchTerm);
	};

	const handleLoadMore = () => {
		if (flatListParams.data.length < searchResults.totalRecords) {
			setFlatListParams({
				...flatListParams,
				page: searchResults.page + 1,
				loading: true,
			});
			handleSubmit(searchTerm);
		}
	};

	return (
		<>
			<View style={{ flex: 1, paddingTop: 20 }}>
				<View
					style={{
						height: 80,
						backgroundColor: colors.primaryShade14,
						justifyContent: 'center',
						paddingHorizontal: 5,
					}}
				>
					<View
						style={{
							height: 45,
							backgroundColor: 'white',
							flexDirection: 'row',
							paddingHorizontal: 5,
							alignItems: 'center',
						}}
					>
						{loading ? <Loader screen="simple" size='small'/>:<MaterialCommunityIcons
							name="magnify"
							size={25}
							color={colors.primary2}
						/>}
						<TextInput
							ref={textRef}
							placeholder="Search"
							style={{
								height: '100%',
								width: '90%',
								fontSize: 20,
								paddingLeft: 15,
							}}
							// value={searchTerm}
							// onChange={(e)=>setSearchTerm(e.target.value)}
							onSubmitEditing={(e) => {
								setSearchTerm(e.nativeEvent.text);
								return handleSubmit(e.nativeEvent.text);
							}}
						/>
					</View>
					{searchResults&&
					<AppText  style={styles.textInfo}>{searchResults.totalRecords.toString()} records found</AppText>}
				</View>
				<View style={styles.screen}>
					{searchResults && searchResults.data === 'No Records found'? (
						<AppText style={styles.message}>No Records Found</AppText>
					) : (
						<FlatList
							refreshing={flatListParams.refreshing}
							onRefresh={() => handleRefresh()} //call a function
							data={flatListParams.data}
							showsVerticalScrollIndicator={false}
							initialNumToRender={6}
							removeClippedSubviews={true}
							numColumns={2}
							keyExtractor={(data, index) => index.toString()}
							ListFooterComponent={renderFooter}
							onEndReached={() => handleLoadMore()}
							onEndReachedThreshold={0.5}
							renderItem={({ item }) => (
								<View style={styles.outerView}>
									<ProductCard item={item} />
								</View>
							)}
						/>
					)}
				</View>
			</View>
		</>
	);
};

export default Search;

const styles = StyleSheet.create({
	textInfo:{
		color:colors.primary1,
		fontSize:13,
		textAlign:'center'
	},
	message: {
		color: colors.primary1,
		flex: 1,
		textAlign: 'center',
	},
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
