import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import Home from '../buyer/screens/Home';
import SubCategoryProducts from '../buyer/screens/SubCategoryProducts';
import HeaderTitle from '../common/components/HeaderTitle';
import colors from '../config/colors';
import TabNavigator from './TabNavigator';
import ProductView from '../buyer/screens/ProductView';
 
const Stack=createStackNavigator();

const HomeNavigator=()=>(
    <Stack.Navigator screenOptions={{
        headerTintColor: colors.primary1
      }}>
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false}}/>
        <Stack.Screen name="SubCategoryProduct" component={SubCategoryProducts}
        options={({ route })=>({ headerTitle: props => <HeaderTitle 
                                     name={route.params.subCategoryName} 
                                     totalItems={route.params.total}
                               {...props} /> })}
        />
         <Stack.Screen name="ProductDetails" component={ProductView} 
        options={{ headerShown: false}}/>
    </Stack.Navigator>
)
export default HomeNavigator