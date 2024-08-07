import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import Navbar from "../components/Navbar";
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import { SearchBar } from '@rneui/themed';
import Feather from "react-native-vector-icons/Feather"

const History = ()=>{
    return (
        <View>
            <Navbar />
            <View style = {{padding:7,flexDirection:"row",gap:10,borderWidth:1,borderColor:"grey",borderRadius:30,marginHorizontal:10,marginVertical:10}}>
            <Feather name = {"search"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:8}} />
            <TextInput  placeholder="Search by name,number or UPI ID" style = {{fontSize:16,fontWeight:"500",color:"grey",padding:8}} value=""/>
            </View>
           
            <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:10,marginVertical:10}}>
                <View style = {{padding:7,borderWidth:1,borderColor:"grey",flexDirection:"row",gap:5,borderRadius:10}}><Text style = {{textAlign:"center",fontSize:13,fontWeight:"500",color:"grey"}}>Download Statement</Text><FontAwesome name = {"language"} size = {14} color = {"black"}  /></View>
                <View style = {{padding:7,borderWidth:1,borderColor:"grey",flexDirection:"row",gap:5,borderRadius:10}}><Text style = {{textAlign:"center",fontSize:13,fontWeight:"500",color:"grey"}}>Filter</Text><FontAwesome name = {"language"} size = {14} color = {"black"}  /></View>
            </View>
            <ScrollView vertical = {true} showsVerticalScrollIndicator = {false}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome name = {"language"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:16,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Name</Text>
             
                <Text style = {{fontSize:12,fontWeight:"400",color:"grey",marginHorizontal:5}}>Amount</Text>
                </View>
                </View>
                <View>
                <Text style = {{marginHorizontal:15,marginVertical:5,fontSize:20,color:"grey",fontWeight:"400"}}>Amount</Text>
        
                </View>
                </View>
                <View style = {{marginHorizontal:5,marginVertical:5,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <Text style = {{fontSize:14,fontWeight:"400",color:"grey",marginHorizontal:5}}>1 day ago</Text>
                    <View style = {{flexDirection:"row",gap:10}}>
                        <Text>Debited From</Text>
                        <FontAwesome name = {"language"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
                    </View>
                </View>
                <View style = {{marginHorizontal:5,marginVertical:5,width:"95%",height:0.5,backgroundColor:"grey"}}></View>
                
                </ScrollView>    
            </View>
            
        </View>

    )
}
export default History;