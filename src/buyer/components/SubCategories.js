import React,{useState} from 'react'
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import Avatar from '../../common/components/Avatar';
import { LinearGradient } from "expo-linear-gradient";
import colors from '../../config/colors';
import SubCategoryPicker from '../../common/components/SubCategoryPicker';

const data = [
    {
        name: 'concrete',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'brick',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'steal',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'glass',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'windows',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'doors',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'paint',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'All'
    }

]


const SubCategories = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const handelSubCategory=(item)=>{
        if(item==='All')
         setModalVisible(true);
    }

    return (
        <>
        <SubCategoryPicker visible={modalVisible} setModalVisible={setModalVisible}/>
        <LinearGradient
            start={[0.8, 0.0]}
            end={[0.8, 0.9]}
            colors={[colors.primaryShade24,colors.primaryShade22, colors.primaryShade24,colors.primaryShade22,colors.primaryShade24]}>
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
        paddingVertical: 6
    }
})
