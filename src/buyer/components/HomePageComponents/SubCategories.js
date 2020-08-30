import React,{useState} from 'react'
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import Avatar from '../../../common/components/Avatar';
import { LinearGradient } from "expo-linear-gradient";
import colors from '../../../config/colors';
import SubCategoryPicker from '../../../common/components/SubCategoryPicker';
import { useNavigation } from '@react-navigation/native';
const data = [
    {
        name: 'concrete',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'brick',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'steal',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'glass',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'windows',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'doors',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'paint',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'All'
    }

]


const SubCategories = () => { 
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false)

    const handelSubCategory=(item)=>{
        if(item==='All')
         setModalVisible(true);
         else navigation.navigate('SubCategoryProduct',{subCategoryName:item,total:undefined}) //navigate with params
           
    }

    return (
        <>
        <SubCategoryPicker visible={modalVisible} setModalVisible={setModalVisible}/>
        <LinearGradient
            start={[0.8, 0.2]}
            end={[0.7, 1]}
            colors={[colors.primaryShade24, colors.primaryShade24,colors.primaryShade22,colors.primaryShade24]}>
            {console.log('in subCategory')}
            <FlatList
                data={data}
                numColumns={4}
                scrollEnabled={false}
                keyExtractor={data => data.name}
                renderItem={({ item }) =>
                    <View style={styles.parent}>
                        <TouchableOpacity onPress={()=>handelSubCategory(item.name)}>
                            <Avatar text={item.name} image={item.avatar} />
                        </TouchableOpacity>
                    </View>

                }
            />
        </LinearGradient>
        </>
    )
}

export default SubCategories

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        paddingVertical: 6,
    }
})
