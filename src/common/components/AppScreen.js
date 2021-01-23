import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import constants from 'expo-constants';

const AppScreen = ({ children }) => {
	return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default AppScreen;

const styles = StyleSheet.create({
	screen: {
		paddingTop: constants.statusBarHeight,
		flex: 1
	}
});
