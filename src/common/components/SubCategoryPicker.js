import React from 'react'
import { StyleSheet, Modal, Text,Button,FlatList,TouchableOpacity,View } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Avatar from './Avatar';
import colors from '../../config/colors';


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
        name: 'steal',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'plastic',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'sand',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'cement',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'insulation',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'finishing material',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'Tile exterior and interior',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'plumping fixture',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'lighting fixtures',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'windows',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
    {
        name: 'elevators and esclator',
        avatar: 'https://www.concrete2you.com/siteassets/concrete2you/concrete-in-wheelbarrow.jpg?maxwidth=2000&maxheight=1000'
    },
   

]

const SubCategoryPicker = ({visible,setModalVisible}) => {
    return (
        
       
        <Modal visible={visible} animationType='slide' transparent >
         <LinearGradient
           style={styles.modal}
            start={[0.2, 0.2]}
            end={[0.8, 0.9]}
            colors={[colors.primaryShade21,colors.primaryShade24, colors.primaryShade21,colors.primaryShade22,colors.primaryShade24]}>
          <TouchableOpacity onPress={()=>setModalVisible(false)} style={styles.touch}>
          <MaterialCommunityIcons style={styles.icon} name="close" size={20}/>
          </TouchableOpacity>
           {/* <Button title='Close'  color={colors.primary2} onPress={()=>setModalVisible(false)}/> */}
           <FlatList
                data={data}
                numColumns={3}
                keyExtractor={data => data.name}
                renderItem={({ item }) =>
                    <View style={styles.parent}>
                        <TouchableOpacity onPress={()=>handelSubCategory(item.name)}>
                            <Avatar text={item.name} image={item.avatar} customStyles={styles.avatar}/>
                        </TouchableOpacity>
                    </View>

                }
            />
           </LinearGradient>
        </Modal>
        
    )
}

export default SubCategoryPicker

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        paddingVertical: 6,
       
    },
    touch:{
        width:30,
        height:30,
        backgroundColor:colors.primaryShade23,
        borderRadius:15,
        padding:5,
        alignSelf:'flex-end',
        
        top:6,
        right:8
    },
    icon: {
        color: colors.primary1,
        textAlign:'center',
    },
    avatar:{
     height:80,
     width:80,
     borderRadius:50,
    },
    modal:{
        // backgroundColor:colors.primary2,
        flex:1,
        opacity:0.9
        
    }
})
