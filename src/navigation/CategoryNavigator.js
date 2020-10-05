import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../config/colors';
import Categories from '../buyer/screens/Categories';
import SubCategoryProducts from '../buyer/screens/SubCategoryProducts';
import HeaderTitle from '../common/components/HeaderTitle';

const Stack=createStackNavigator();

const CategoryNavigator=()=>(
    <Stack.Navigator  screenOptions={{
        headerTintColor: colors.primary1
      }}>
        <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false}}/>
       <Stack.Screen name="SubCategoryProduct" component={SubCategoryProducts}
        options={({ route })=>({ headerTitle: props => <HeaderTitle 
                                     name={route.params.subCategoryName} 
                                     totalItems={route.params.total}
                               {...props} /> })}
        /> 
    </Stack.Navigator>
)
export default CategoryNavigator