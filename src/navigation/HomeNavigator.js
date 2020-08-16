import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../buyer/screens/Home';

const Stack=createStackNavigator();

const HomeNavigator=()=>(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
    </Stack.Navigator>
)
export default HomeNavigator