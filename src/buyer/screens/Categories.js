import React, { useEffect } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import AccordionListItem from '../components/CategoryPageComponents/AccordionListItem';
import { useSelector, useDispatch } from 'react-redux';
import { SELLER_CATEGORY } from '../../../store/actions/actionTypes';
import { sellerCategoryAction } from '../../../store/actions';
import colors from '../../config/colors';
// import Cards from '../components/CategoryPageComponents/Card'

const Categories = () => {
	const sellerCategory = useSelector((state) => state.home.sellerCategory);
	const dispatch = useDispatch();

	// console.log('selllerrrrrrrrrrrrrr', sellerCategory);
	useEffect(() => {
		dispatch(sellerCategoryAction(SELLER_CATEGORY));
	}, []);

	if (!sellerCategory)
		//means data not yet retreived
		return (
			<ActivityIndicator
				size="large"
				color={colors.primaryShade22}
				style={styles.loader}
			/>
		);
	return (
		<>
			<AccordionListItem sellerCategory={sellerCategory} />
		</>
	);
};

export default Categories;

const styles = StyleSheet.create({
	loader: {
		flex: 1,
	},
});
