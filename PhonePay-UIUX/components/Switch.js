import React from "react";
import { Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import Ionicons from "react-native-vector-icons/Ionicons"
const Switch = ()=>{
    return (
        <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
        
        <Text style = {{fontSize:15,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>Switch</Text>
        

        <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"space-between",alignItems:"center"}}>
            <View style = {{alignItems:"center",width:"23%"}}>
               
                <FontAwesome5 name = {"shipping-fast"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
            
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>Buy FASTag</Text>
            </View>
            <View style = {{alignItems:"center",width:"23%"}}>
                
                <FontAwesome6 name = {"train"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>Metro</Text>
            </View>
            <View style = {{alignItems:"center",width:"23%"}}>
               
                <Ionicons name = {"logo-venmo"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>NCMC Recharge</Text>
            </View>
            <View style = {{alignItems:"center",width:"23%"}}>
                <View style = {{width:40,height:40,borderRadius:10,alignItems:"center",backgroundColor:"#7209b7"}}>
                <AntDesign name = {"right"} size = {30} color = {"white"} style = {{marginVertical:5}}/>
                </View>
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>See All</Text>
            </View>
        </View>
        
    </View>
    )
}
export default Switch;