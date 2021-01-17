import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import AppText from '../../../common/components/AppText'
import colors from '../../../config/colors';
import { useNavigation } from '@react-navigation/native';

const SubsubCategories = ({ subsubCategory, subSubCategoryItems}) => {
    // console.log(subSubCategoryItems)
    const navigation = useNavigation();
    const handelSubCategory=(name,id)=>{
         navigation.navigate('SubCategoryProduct',{name:name,id:id,total:undefined}) //navigate with params     
    }
    return (
        <React.Fragment>
        {subSubCategoryItems.map(item=>item.productCategoryName===subsubCategory &&
          <TouchableOpacity key={item.id} onPress={()=>handelSubCategory(item.productSubCategoryName,item.id)}>
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
