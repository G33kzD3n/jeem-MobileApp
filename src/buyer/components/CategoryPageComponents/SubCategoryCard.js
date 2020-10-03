import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AppText from "../../../common/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../config/colors";
import { useNavigation } from "@react-navigation/native";

const SubCategoryCard = ({
  items,
  toggleExpandedCat,
  hasSubSubCat,
  collapsedSubsubCat,
}) => {
  const navigation = useNavigation();
  const handleSubCategoryPress = (item) => {
    if (hasSubSubCat) toggleExpandedCat(item);
    else
      navigation.navigate("SubCategoryProduct", {
        subCategoryName: item,
        total: undefined,
      });
  };
  return (
    <TouchableOpacity
      onPress={() => handleSubCategoryPress(items.productCategoryName)}
    >
      <View style={styles.outerContainer}>
        <AppText style={styles.text}>{items.productCategoryName}</AppText>
        {hasSubSubCat && (
            !collapsedSubsubCat.collapseCat && collapsedSubsubCat.cat === items.productCategoryName  ?
              <MaterialCommunityIcons
                style={styles.icon}
                name= "chevron-up"
                size={35}
                color={colors.primaryShade11}
              />:
              <MaterialCommunityIcons
              style={styles.icon}
              name= "chevron-down"
              size={32}
              color={colors.primaryShade11}
            />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SubCategoryCard;

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: colors.primaryShade24,
    // borderWidth:3,
    // borderColor:'red'
  },
  text: {
    color: colors.primary1,
    fontSize: 17,
  },
});
