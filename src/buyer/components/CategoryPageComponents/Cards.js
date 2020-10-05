import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../../common/components/AppText";
import colors from "../../../config/colors";

const dummyData=[
  {
    id:1,
    categoryName:'Building Materials',
    categoryImage:'https://i.ytimg.com/vi/ZAzw8Z1pJf0/maxresdefault.jpg'
  },
  {
    id:2,
    categoryName:'Contractors',
    categoryImage:'http://www.setimber.com.au/media/catalog/category/tranditional_timber_floorboards_solid_timber_floors.jpg'
  },
  {
    id:3,
    categoryName:'Engineering Offices',
    categoryImage:'http://images.fastcompany.com/upload/City-of-Vancouver.jpg'
  }
]
const Cards = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-between",
      }}
    >
      {dummyData.map(data=>
         <TouchableWithoutFeedback key={data.id} onPress={() => console.log("hello world")}>
         <View style={styles.box1}>
             <ImageBackground
               source={{
                 uri:data.categoryImage
               }}
               style={styles.containerStyle}
             >
               <View style={styles.innerBoxes1}>
                 <AppText style={styles.text}>{data.categoryName}
                 </AppText>
                 <MaterialCommunityIcons style={styles.icon} name='chevron-down' size={40} color={colors.primary1}/>
               </View>
               <View style={styles.innerBoxes2}></View>
             </ImageBackground>
          
         </View>
         </TouchableWithoutFeedback>
        
        )}
      


      {/* <View style={styles.box2}>
        <AppText>container 1</AppText>
      </View>
      <View style={styles.box3}>
        <Text>container 1</Text>
      </View> */}
    </ScrollView>
  );
};

export default Cards;

const styles = StyleSheet.create({
  icon:{
    // justifyContent:'center',
    alignSelf:'center',
    textAlign:'left',
    paddingTop:5
    // borderWidth:4,
    // borderColor:'red',
  },
  text:{
    // borderWidth:1,
    // borderColor:'red',
    color:colors.primary1,
    fontWeight:'bold',
    fontSize:40,
    width:'65%'
    // height:'100%',
    // alignSelf:'center',
    // alignContent:'center'
  },
  containerStyle: {
    flexDirection: "row",
    flex: 1,
    resizeMode: "contain",
  },
  innerBoxes1: {
    // borderWidth:1,
    // borderColor:'green',
    flexDirection:'row',
    flex: 2,
    backgroundColor: colors.primaryShade23,
    opacity: 0.8,
    borderTopEndRadius: 250,
    justifyContent:'center',
    // paddingLeft:10

  },
  innerBoxes2: {
    flex: 1,
  },
  box1: {
    backgroundColor: colors.primaryShade12,
    flexGrow: 1,
    justifyContent: "space-between",
  },
  box2: {
    backgroundColor: colors.primaryShade12,
    flexGrow: 1,
    justifyContent: "space-between",
  },
  box3: {
    backgroundColor: colors.primaryShade12,
    flexGrow: 1,
    justifyContent: "space-between",
  },
});
