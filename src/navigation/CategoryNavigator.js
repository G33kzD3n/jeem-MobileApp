import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../config/colors';
import Categories from '../buyer/screens/Categories';

const Stack=createStackNavigator();

const CategoryNavigator=()=>(
    <Stack.Navigator  screenOptions={{
        headerTintColor: colors.primary1
      }}>
        <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false}}/>
      
    </Stack.Navigator>
)
export default CategoryNavigator