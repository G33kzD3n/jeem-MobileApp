import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import Collapsible from "react-native-collapsible";
import CategoryCard from "./CategoryCard";
import SubCategory from "./SubCategory";

const dummyData = [
  {
    id: 1,
    categoryName: "Building Materials",
    categoryImage: "https://i.ytimg.com/vi/ZAzw8Z1pJf0/maxresdefault.jpg",
  },
  {
    id: 2,
    categoryName: "Contractors",
    categoryImage:
      "http://www.setimber.com.au/media/catalog/category/tranditional_timber_floorboards_solid_timber_floors.jpg",
  },
  {
    id: 3,
    categoryName: "Engineering Offices",
    categoryImage: "http://images.fastcompany.com/upload/City-of-Vancouver.jpg",
  },
];

const subCategoryItems = [
  {
    id: 1,
    productCategoryName: "Construction Material",
    sellerCategoryName: "Building Materials",
  },
  {
    id: 2,
    productCategoryName: "Finishing Material",
    sellerCategoryName: "Building Materials",
  },
  {
    id: 3,
    productCategoryName: "Lump Sum",
    sellerCategoryName: "Contractors",
  },
  {
    id: 4,
    productCategoryName: "Skelton",
    sellerCategoryName: "Contractors",
  },
  {
    id: 5,
    productCategoryName: "Design and build",
    sellerCategoryName: "Engineering Offices",
  },
  {
    id: 6,
    productCategoryName: "Design archetucre",
    sellerCategoryName: "Engineering Offices",
  },
  {
    id: 7,
    productCategoryName: "Design Interior",
    sellerCategoryName: "Engineering Offices",
  },
  {
    id: 8,
    productCategoryName: "Consulting and Supervision",
    sellerCategoryName: "Engineering Offices",
  },
  {
    id: 9,
    productCategoryName: "Survey",
    sellerCategoryName: "Engineering Offices",
  },
];

const subSubCategoryItems = [
  {
    id: 1,
    productCategoryName: "Construction Material",
    sellerCategoryName: "Building Materials",
    productSubCategoryName: "concreate",
  },
  {
    id: 2,
    productCategoryName: "Construction Material",
    sellerCategoryName: "Building Materials",
    productSubCategoryName: "brick",
  },
  {
    id: 3,
    productCategoryName: "Construction Material",
    sellerCategoryName: "Building Materials",
    productSubCategoryName: "steal",
  },
  {
    id: 4,
    productCategoryName: "Construction Material",
    sellerCategoryName: "Building Materials",
    productSubCategoryName: "glass",
  },
  {
    id: 5,
    productCategoryName: "Construction Material",
    sellerCategoryName: "Building Materials",
    productSubCategoryName: "plastic",
  },
  {
    id: 6,
    productCategoryName: "Finishing Material",
    sellerCategoryName: "Building Materials",
    productSubCategoryName: "paint",
  },
  {
    id: 7,
    productCategoryName: "Finishing Material",
    sellerCategoryName: "Building Materials",
    productSubCategoryName: "windows",
  },
  {
    id: 8,
    productCategoryName: "Finishing Material",
    sellerCategoryName: "Building Materials",
    productSubCategoryName: "doors",
  },
  {
    id: 9,
    productCategoryName: "Lump Sum",
    sellerCategoryName: "Contractors",
    productSubCategoryName: "Gold Key",
  },
  {
    id: 10,
    productCategoryName: "Lump Sum",
    sellerCategoryName: "Contractors",
    productSubCategoryName: "Silver Key",
  },
  {
    id: 11,
    productCategoryName: "Lump Sum",
    sellerCategoryName: "Contractors",
    productSubCategoryName: "Bronze Key",
  },
  {
    id: 12,
    productCategoryName: "Skelton",
    sellerCategoryName: "Contractors",
    productSubCategoryName: "With Foundation and brick and Sand",
  },
  {
    id: 13,
    productCategoryName: "Skelton",
    sellerCategoryName: "Contractors",
    productSubCategoryName: "With just skelton of building",
  },
];
const AccordionListItem = () => {
  const [collapsedSubCat, setCollapsedSubCat] = useState(true);
  const [category, setCategory] = useState("");
  const toggleExpanded = (selectedCategory) => {
    setCategory(selectedCategory);
    collapsedSubCat ? setCollapsedSubCat(false) : setCollapsedSubCat(true);
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-between",
      }}
    > 
      {dummyData.map((data) => (
        <React.Fragment key={data.id}>
          <CategoryCard
            collapsedSubCat={{collapseCat:collapsedSubCat,cat:category}}
            toggleExpanded={toggleExpanded}
            data={data}
          />
          <Collapsible collapsed={collapsedSubCat} align="center">
            {data.categoryName === category && (
              <SubCategory
                category={category}
                subCategoryItems={subCategoryItems}
                subSubCategoryItems={subSubCategoryItems}
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
