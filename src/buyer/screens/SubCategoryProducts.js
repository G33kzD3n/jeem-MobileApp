import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ProductCard from "../../common/components/ProductCard";
import colors from "../../config/colors";

const data = [
  {
    image: [
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
    ],
    title: "DressBerry",
    subTitle: "Colors for only you",
    price: 679,
    orginalPrice: 1049,
    discount: 60,
  },
  {
    image: [
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
    ],
    title: "DressBerry",
    subTitle: "Colors for only you",
    price: 679,
    orginalPrice: 1049,
    discount: 60,
  },
  {
    image: [
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
    ],
    title: "DressBerry",
    subTitle: "Colors for only you",
    price: 679,
    orginalPrice: 1049,
    discount: 60,
  },
  {
    image: [
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
    ],
    title: "DressBerry",
    subTitle: "Colors for only you",
    price: 679,
    orginalPrice: 1049,
    discount: 60,
  },
  {
    image: [
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
    ],
    title: "DressBerry",
    subTitle: "Colors for only you",
    price: 679,
    orginalPrice: 1049,
    discount: 60,
  },
  {
    image: [
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
    ],
    title: "DressBerry",
    subTitle: "Colors for only you",
    price: 679,
    orginalPrice: 1049,
    discount: 60,
  },
  {
    image: [
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
    ],
    title: "DressBerry",
    subTitle: "Colors for only you",
    price: 679,
    orginalPrice: 1049,
    discount: 60,
  },
  {
    image: [
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
    ],
    title: "DressBerry",
    subTitle: "Colors for only you",
    price: 679,
    orginalPrice: 1049,
    discount: 60,
  },
  {
    image: [
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
      "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
    ],
    title: "DressBerry",
    subTitle: "Colors for only you",
    price: 679,
    orginalPrice: 1049,
    discount: 60,
  },
  {
    image: "https://balinterio.files.wordpress.com/2013/05/cat-tembok.jpg",
    title: "DressBerry",
    subTitle: "Colors for only you",
    price: 679,
    orginalPrice: 1049,
    discount: 60,
  },
];

const SubCategoryProducts = ({ route }) => {
  route.params.total = 10632; // set the total items for header
  // const { subCategoryName } = route.params;
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.screen}>
      <FlatList
        refreshing={refreshing}
        onRefresh={() => data} //call a function
        data={data}
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
