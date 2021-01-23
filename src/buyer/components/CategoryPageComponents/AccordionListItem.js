import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import CategoryCard from './CategoryCard';
import SubCategory from './SubCategory';

const AccordionListItem = ({
	sellerCategory,
	productCategory,
	productSubCategories
}) => {
	const [collapsedSubCat, setCollapsedSubCat] = useState(true);
	const [category, setCategory] = useState('');
	const toggleExpanded = selectedCategory => {
		setCategory(selectedCategory);
		collapsedSubCat ? setCollapsedSubCat(false) : setCollapsedSubCat(true);
	};
	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 1,
				justifyContent: 'space-between'
			}}
		>
			{sellerCategory.map(data => (
				<React.Fragment key={data.id}>
					<CategoryCard
						collapsedSubCat={{ collapseCat: collapsedSubCat, cat: category }}
						toggleExpanded={toggleExpanded}
						data={data}
					/>
					<Collapsible collapsed={collapsedSubCat} align="center">
						{data.categoryName === category && (
							<SubCategory
								category={category}
								subCategoryItems={productCategory}
								subSubCategoryItems={productSubCategories}
							/>
						)}
					</Collapsible>
				</React.Fragment>
			))}
		</ScrollView>
	);
};

export default AccordionListItem;

const styles = StyleSheet.create({});
