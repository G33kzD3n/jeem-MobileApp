import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity
} from 'react-native';
import Avatar from '../../../common/components/Avatar';
import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../../config/colors';
import SubCategoryPicker from '../../../common/components/SubCategoryPicker';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { productSubCategoriesAction } from '../../../../store/actions';
import { GET_PRODUCTSUBCATEGORY } from '../../../../store/actions/actionTypes';
import i18n from '../../../languages/i18n';

const SubCategories = () => {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);

	const productSubCategories = useSelector(
		state => state.product.productSubCategoriesData
	);

	//console.log(productSubCategories);
	const dispatch = useDispatch();

	useEffect(() => {
		if (productSubCategories) {
			hideSplashScreen();
		}
	}, [productSubCategories]);

	useEffect(() => {
		dispatch(productSubCategoriesAction(GET_PRODUCTSUBCATEGORY)); //get called if the user refreshes the page to get data
		showSplashScreen();
	}, []);

	const hideSplashScreen = async () => {
		await SplashScreen.hideAsync();
	};
	const showSplashScreen = async () => {
		await SplashScreen.preventAutoHideAsync();
	};

	const handelSubCategory = item => {
		if (item.productSubCategoryName ==='All')
			setModalVisible(true);
		else
			navigation.navigate('SubCategoryProduct', {
				name: item.productSubCategoryName,
				id: item.id
				// total: undefined,
			}); //navigate with params
	};

	if (!productSubCategories) return <></>;

	return (
		<>
			{modalVisible && (
				<SubCategoryPicker
					visible={modalVisible}
					setModalVisible={setModalVisible}
					productSubCategories={productSubCategories}
				/>
			)}
			<LinearGradient
				start={[0.8, 0.2]}
				end={[0.7, 1]}
				colors={[
					colors.primaryShade24,
					colors.primaryShade24,
					colors.primaryShade22,
					colors.primaryShade24
				]}
			>
				<FlatList
					data={productSubCategories
						.slice(0, 7)
						.concat({
							productSubCategoryName:'All',
							id: 'All'
						})}
					numColumns={4}
					scrollEnabled={false}
					keyExtractor={data => data.id}
					renderItem={({ item }) => (
						<View style={styles.parent}>
							<TouchableOpacity onPress={() => handelSubCategory(item)}>
								<Avatar
									text={item.productSubCategoryName}
									image={item.productSubCategoryImage}
								/>
							</TouchableOpacity>
						</View>
					)}
				/>
			</LinearGradient>
		</>
	);
};

export default SubCategories;

const styles = StyleSheet.create({
	parent: {
		flex: 1,
		paddingVertical: 6
	}
});
