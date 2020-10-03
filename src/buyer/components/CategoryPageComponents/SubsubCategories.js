import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import AppText from '../../../common/components/AppText'
import colors from '../../../config/colors';
import { useNavigation } from '@react-navigation/native';

const SubsubCategories = ({ subsubCategory, subSubCategoryItems}) => {
    // console.log(subsubCategory)
    const navigation = useNavigation();
    const handelSubCategory=(item)=>{
         navigation.navigate('SubCategoryProduct',{subCategoryName:item,total:undefined}) //navigate with params     
    }
    return (
        <React.Fragment>
        {subSubCategoryItems.map(item=>item.productCategoryName===subsubCategory &&
          <TouchableOpacity key={item.id} onPress={()=>handelSubCategory(item.productSubCategoryName)}>
            <View style={styles.outerContainer} >
            <AppText style={styles.text}>
             {item.productSubCategoryName}
            </AppText>
          </View>
          </TouchableOpacity>
            )}
       </React.Fragment>
    )
}

export default SubsubCategories

const styles = StyleSheet.create({
    outerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        paddingLeft:25,
        borderBottomWidth:1,
        borderBottomColor:colors.primaryShade24    // backgroundColor:colors.primaryShade24,
        // borderWidth:3,
        // borderColor:'red'
    },
    text:{
        color:colors.primary1,
        fontSize:17
    },
})
