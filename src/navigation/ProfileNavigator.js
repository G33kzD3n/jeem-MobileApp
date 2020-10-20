import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../config/colors';
import Profile from '../buyer/screens/Profile';
 
const Stack=createStackNavigator();

const ProfileNavigator=()=>(
    <Stack.Navigator screenOptions={{
        headerTintColor: colors.primary1
      }}>
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
)
export default ProfileNavigator