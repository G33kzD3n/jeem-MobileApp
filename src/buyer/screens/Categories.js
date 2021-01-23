import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import AccordionListItem from '../components/CategoryPageComponents/AccordionListItem';
import { useSelector, useDispatch } from 'react-redux';
import {
	GET_PRODCUTCATEGORY,
	SELLER_CATEGORY
} from '../../../store/actions/actionTypes';
import {
	productCategoriesAction,
	sellerCategoryAction
} from '../../../store/actions';
import Loader from '../../common/components/Loader';

const Categories = () => {
	const sellerCategory = useSelector(state => state.home.sellerCategory);
	const productCategory = useSelector(
		state => state.product.productCategoriesData
	);
	const productSubCategories = useSelector(
		state => state.product.productSubCategoriesData
	);
	const dispatch = useDispatch();

	// console.log('selllerrrrrrrrrrrrrr', productCategory);
	useEffect(() => {
		dispatch(sellerCategoryAction(SELLER_CATEGORY));
		dispatch(productCategoriesAction(GET_PRODCUTCATEGORY));
	}, []);

	if (!sellerCategory)
		//means data not yet retreived
		return <Loader />;

	return (
		<>
			<AccordionListItem
				sellerCategory={sellerCategory}
				productCategory={productCategory}
				productSubCategories={productSubCategories}
			/>
		</>
	);
};

export default Categories;

const styles = StyleSheet.create({
	loader: {
		flex: 1
	}
});
