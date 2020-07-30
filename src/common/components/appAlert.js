import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const appAlert = (title,msg) =>  {
    Alert.alert(
          title,
          msg,
          [
            { text: "OK" }
          ],
          { cancelable: false }
)
}


export default appAlert

const styles = StyleSheet.create({})
