import React from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import AppScreen from '../../common/components/AppScreen'
import colors from '../../config/colors'
import AppVersion from '../components/ProfilePageComponents/AppVersion'
import SecondSection from '../components/ProfilePageComponents/SecondSection'
import ThirdSection from '../components/ProfilePageComponents/ThirdSection'
import TopSections from '../components/ProfilePageComponents/TopSections'

const Profile = () => {
    return (
      // <AppScreen>
            <ScrollView style={{backgroundColor:colors.primaryShade24}}>
              <View>
              <TopSections/>
              <SecondSection/>
              <ThirdSection/>
              <AppVersion/>
              </View>
            </ScrollView>
      // </AppScreen>
    )
}

export default Profile

const styles = StyleSheet.create({})