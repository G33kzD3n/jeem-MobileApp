import React from 'react'
import { StyleSheet, View,Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import AppDivider from './AppDivider';

const Reviews = () => {
  return (
    <React.Fragment>
      <AppDivider/>
      <View style={styles.topContainer}>
        <View style={styles.cartImage}>
          <MaterialCommunityIcons
            name='radiobox-blank'
            size={24}
            color={colors.primary1}
          />
        </View>
        <View style={styles.dataContainer}>
         <Text>helooooooooooo</Text>
        </View>
      </View>
  </React.Fragment>
  )
}

export default Reviews

const styles = StyleSheet.create({
  topContainer: {
		backgroundColor: colors.white,
		marginBottom: 1,
		flexDirection: 'row',
		flex: 1,
		// height: 150,
		borderColor: 'red',
		paddingVertical: 10,
		justifyContent: 'space-evenly',
  },
  cartImage: {
		flex: 1,
		paddingRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
		// borderColor: colors.primary1,
		// borderWidth: 1,
  },
  dataContainer: {
		// paddingBottom: 5,
		flex: 4,
		//  justifyContent:'space-around'
	},
})
