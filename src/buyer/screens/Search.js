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
	// const [searchTerm,setSearchTerm]=useState('')
	const isFocused = useIsFocused();
	const dispatch = useDispatch();
	const searchResults = useSelector((state) => state.home.search);

	useEffect(() => {
		textRef.current.focus();
		return () => dispatch({ type: CLEAR_SEARCH });
	}, [isFocused]);

	useEffect(() => {
		setLoading(false);
		return () => Keyboard.dismiss();
	}, [searchResults]);

	const handleSubmit = (e) => {
		dispatch({ type: CLEAR_SEARCH });
		setLoading(true);
		dispatch(searchAction(SEARCH, e.nativeEvent.text));
	};

	return (
		<>
			{loading && <Loader />}
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
						<MaterialCommunityIcons
							name="magnify"
							size={25}
							color={colors.primary2}
						/>
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
							onSubmitEditing={(event) => handleSubmit(event)}
						/>
					</View>
				</View>
				<View style={styles.screen}>
					{searchResults && searchResults.length === 0 ? (
						<AppText style={styles.message}>No Records Found</AppText>
					) : (
						<FlatList
							data={searchResults}
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
					)}
				</View>
			</View>
		</>
	);
};

export default Search;

const styles = StyleSheet.create({
	message:{
		color:colors.primary1,
		flex:1,
	  textAlign:'center'
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
