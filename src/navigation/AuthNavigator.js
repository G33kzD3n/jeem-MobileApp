import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../common/screens/LoginScreen';
import RegisterScreen from '../common/screens/RegisterScreen';

const Stack=createStackNavigator();

const AuthNavigator=()=>(
    <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
    </Stack.Navigator>
)

export default AuthNavigator
