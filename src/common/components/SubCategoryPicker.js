import React from 'react'
import { StyleSheet, Modal, Text, Button, FlatList, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Avatar from './Avatar';
import colors from '../../config/colors';


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
        name: 'steal',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'plastic',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'sand',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'cement',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'insulation',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'finishing material',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'Tile exterior and interior',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'plumping fixture',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'lighting fixtures',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'windows',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },
    {
        name: 'elevators and esclator',
        avatar: 'https://static1.squarespace.com/static/58ebeae859cc68b20f410b26/5a281fa5e2c4838eb6e38450/5b05d8da6d2a73e363579eb4/1527865385460/brick+wall.jpg?format=1500w'
    },


]

const SubCategoryPicker = ({ visible, setModalVisible }) => {
    return (


        <Modal visible={visible} animationType='slide' transparent >
            <LinearGradient
                style={styles.modal}
                start={[0.2, 0]}
                end={[0.8, 0.9]}
                colors={[colors.primaryShade21, colors.primaryShade24, colors.primaryShade21, colors.primaryShade22, colors.primaryShade24]}>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.touch}>
                    <MaterialCommunityIcons style={styles.icon} name="close" size={20} />
                </TouchableOpacity>
                {/* <Button title='Close'  color={colors.primary2} onPress={()=>setModalVisible(false)}/> */}
                <FlatList
                    data={data}
                    numColumns={3}
                    keyExtractor={data => data.name}
                    renderItem={({ item }) =>
                        <View style={styles.parent}>
                            <TouchableOpacity onPress={() => handelSubCategory(item.name)}>
                                <Avatar text={item.name} image={item.avatar} customStyles={styles.avatar} />
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
    touch: {
        width: 30,
        height: 30,
        backgroundColor: colors.primaryShade22,
        borderRadius: 15,
        padding: 5,
        alignSelf: 'flex-end',

        top: 6,
        right: 8
    },
    icon: {
        color: colors.primary1,
        textAlign: 'center',
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    modal: {
        backgroundColor: colors.primary2,
        flex: 1,
        opacity: 0.9

    }
})
