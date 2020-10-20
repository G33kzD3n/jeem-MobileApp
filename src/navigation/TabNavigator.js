import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Explore from '../buyer/screens/Explore';
import Profile from '../buyer/screens/Profile';
import colors from '../config/colors';
// import HomeNavigator from './HomeNavigator';
// import CategoryNavigator from './CategoryNavigator';
import Home from '../buyer/screens/Home';
import Categories from '../buyer/screens/Categories';
import ProfileNavigator from './ProfileNavigator';

 

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
    <Tab.Navigator tabBarOptions={{
        activeBackgroundColor: colors.primaryShade24,
        activeTintColor: colors.primary1,
        inactiveBackgroundColor: colors.primaryShade24,
        inactiveTintColor: colors.primary2
    }}>
        <Tab.Screen name='Home'component={Home} options={{
            tabBarIcon: ({color,size}) => <MaterialCommunityIcons
                name="home" size={size} color={color} />
        }}
        />
        <Tab.Screen name='Category' component={Categories} options={{
            tabBarIcon: ({color,size}) => <MaterialCommunityIcons
                name="view-list" size={size}  color={color}/>
        }}
        />
        <Tab.Screen name='Cart' component={Explore} options={{
            tabBarIcon: ({color,size}) => <MaterialCommunityIcons
                name="cart" size={size} color={color} />
        }}
        />
        <Tab.Screen name='Profile' component={ProfileNavigator} options={{
            tabBarIcon: ({color,size}) => <MaterialCommunityIcons
                name="account" size={size} color={color} />
        }}
        />
    </Tab.Navigator>
)

export default TabNavigator