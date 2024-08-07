import React from "react";
import { Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const Recharge = ()=>{
    return (
        <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
        <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:10,marginVertical:10}}>
        <Text style = {{fontSize:15,fontWeight:"600",color:"black"}}>Recharge & Pay Bills</Text>
        <View style = {{backgroundColor:"#ffe5ec",borderRadius:10}}>
            <Text style = {{fontSize:16,fontWeight:"600",color:"grey",marginHorizontal:5,marginVertical:5}}>My Bills</Text>
        </View>
        </View>

        <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"space-between",alignItems:"center"}}>
            <View style = {{alignItems:"center",width:"23%"}}>
               
                <MaterialIcons name = {"mobile-friendly"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
            
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>Mobile Recharge</Text>
            </View>
            <View style = {{alignItems:"center",width:"23%"}}>
                
                <MaterialCommunityIcons name = {"bank"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>Loan Repayment </Text>
            </View>
            <View style = {{alignItems:"center",width:"23%"}}>
               
                <MaterialCommunityIcons name = {"home-thermometer-outline"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>Rent</Text>
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
export default Recharge;