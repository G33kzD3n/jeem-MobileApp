import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileCard from "../../../common/components/ProfileCard";
import colors from "../../../config/colors";

const SecondSection = () => {
  return (
    <View style={styles.topContainer}>
      <ProfileCard
        customStyle={styles.customStyle}
        heading="Orders"
        subHeading="Check your order status"
        icon="inbox-arrow-up"
      />
      <ProfileCard
        customStyle={styles.customStyle}
        heading="Help Center"
        subHeading="Help regarding your recent purchases"
        icon="help-rhombus-outline"
      />
       <ProfileCard
        customStyle={styles.customStyle}
        heading="Share"
        subHeading="Refer to your friends"
        icon="share-variant"
      />
    </View>
  );
};

export default SecondSection;

const styles = StyleSheet.create({
  topContainer: {
    // backgroundColor:colors.white
  },
  customStyle: {
    marginBottom: 2,
    backgroundColor: colors.white,
  },
});
