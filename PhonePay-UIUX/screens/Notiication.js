import React from "react";
import { ScrollView, View,Text,TextInput,Pressable } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import Feather from "react-native-vector-icons/Feather"
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const Notification = ()=>{
    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:"Notification",
            headerStyle:{
                backgroundColor:"#7209b7",
                
            },
            headerTitleStyle:{
                color:"white",
                fontSize:20,
                fontWeight:"bold",
                
            },
            headerLeft:()=>(
              <Pressable onPress={()=>navigation.goBack()}>
               <Text> <AntDesign name="arrowleft" size={24} color="white" /></Text>
                </Pressable>
            ),
            headerRight:()=>(
                <View style = {{marginHorizontal:10}}>
               
               <FontAwesome name = {"question-circle-o"} size = {24} color = {"white"} />
                </View>
            )
        });
    },[]);
    return (
        <View>
            <ScrollView vertical = {true} showsVerticalScrollIndicator = {false}>
            <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome name = {"language"} size = {20} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:17,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Name</Text>
             
                <Text style = {{fontSize:14,fontWeight:"400",color:"grey",marginHorizontal:5}}>Purpase</Text>
                </View>
                </View>
                <View>
                <Entypo name = {"dots-three-vertical"} size = {16} color = {"grey"} style = {{marginHorizontal:15,marginVertical:5}} />
                <Text style = {{marginHorizontal:15,marginVertical:5,fontSize:12,color:"grey",fontWeight:"400"}}>Date</Text>
               
                </View>
                </View>
             
                
                
            </View>
            </ScrollView>
        </View>

    )
}
export default Notification;