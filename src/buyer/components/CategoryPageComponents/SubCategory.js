import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import colors from "../../../config/colors";
import Collapsible from "react-native-collapsible";
import SubCategoryCard from "./SubCategoryCard";
import SubsubCategories from "./SubsubCategories";

const SubCategory = ({ category, subCategoryItems, subSubCategoryItems }) => {
  // const items=subSubCategoryItems.filter(items=>items.sellerCategoryName===category)
  // console.log('tiems',items);
  const [collapsedSubsubCat, setCollapsedSubsubCat] = useState(true);
  const [subsubCategory, setSubsubCategory] = useState("");
  const toggleExpandedCat = (selectedCategory) => {
    //get subCategory
    // console.log(selectedCategory);
    setSubsubCategory(selectedCategory);
    collapsedSubsubCat
      ? setCollapsedSubsubCat(false)
      : setCollapsedSubsubCat(true);
  };
  return (
    <React.Fragment>
      {subCategoryItems.map(
        (items) =>
          items.sellerCategoryName === category && (
            <React.Fragment key={items.id}>
              <SubCategoryCard
                items={items}
                collapsedSubsubCat={{collapseCat:collapsedSubsubCat,cat:subsubCategory}}
                toggleExpandedCat={toggleExpandedCat}
                hasSubSubCat={subSubCategoryItems.find(item=>item.sellerCategoryName===category)}
              />
              <Collapsible collapsed={collapsedSubsubCat} align="center">
              {items.productCategoryName === subsubCategory &&   <SubsubCategories
                  subsubCategory={subsubCategory}
                  subSubCategoryItems={subSubCategoryItems}
                />}
              </Collapsible>
            </React.Fragment>
          )
      )}
    </React.Fragment>
  );
};

export default SubCategory;

const styles = StyleSheet.create({
  icon: {},
});
