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
const Mobile = ()=>{
    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:"Send Money",
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
                <View style = {{flexDirection:"row",gap:20,marginHorizontal:10}}>
               <Feather name = {"refresh-ccw"} size = {24} color = {"white"} /> 
               <FontAwesome name = {"question-circle-o"} size = {24} color = {"white"} />
                </View>
            )
        });
    },[]);
    return (
        <View>
            <ScrollView vertical = {true} showsVerticalScrollIndicator = {false}>
            <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            
            <View style = {{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:15}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome name = {"language"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>New Payment</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>to any mobile</Text>
                </View>
                </View>
                <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome name = {"language"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Split Expense</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>with group</Text>
                </View>
                </View>
                </View>
                </View>
                <View style = {{padding:7,flexDirection:"row",gap:10,borderWidth:1,borderColor:"grey",borderRadius:30,marginHorizontal:10,marginVertical:10}}>
            <Feather name = {"search"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:8}} />
            <TextInput  placeholder="Search by name,number or UPI ID" style = {{fontSize:16,fontWeight:"500",color:"grey",padding:8}} value=""/>
            </View>
                <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome name = {"language"} size = {40} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:24,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Name</Text>
             
                <Text style = {{fontSize:20,fontWeight:"400",color:"grey",marginHorizontal:5}}>Amount</Text>
                </View>
                </View>
                <View>
                <Text style = {{marginHorizontal:15,marginVertical:5,fontSize:20,color:"grey",fontWeight:"400"}}>Date</Text>
                <View style = {{marginHorizontal:30,marginVertical:5,backgroundColor:"green",width:10,height:10,borderRadius:100,alignItems:"center"}}></View>
                </View>
                </View>
                <View style = {{marginHorizontal:20,marginVertical:5,width:"95%",height:1,backgroundColor:"grey"}}></View>
                
                
            </View>
            </ScrollView>
        </View>

    )
}
export default Mobile;