import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import AppText from "./AppText";

const ProfileCard = ({ icon, heading, subHeading,customStyle }) => {
  return (
      <View style={customStyle}> 
    <TouchableOpacity style={styles.topTouch} onPress={()=>console.log("prof")}>
      <View style={styles.topContainer}>
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={35}
          color={colors.primaryShade21}
        />
        <View>
          <AppText style={styles.text}>{heading}</AppText>
          <AppText style={styles.subHeading}>{subHeading}</AppText>
        </View>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  topTouch: {
    height: 80,
    justifyContent: "center",
  },
  topContainer: {
    flexDirection: "row",
    // borderColor:'red',
    // borderWidth:3
  },
  text: {
    color: colors.primary1,
  },
  subHeading: {
    color: colors.primaryShade21,
    fontSize: 14,
  },
  icon: {
    paddingHorizontal: 12,
  },
});
