import React from "react";
import { Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const Three = ()=>{
    return (
        

        <View style = {{marginHorizontal:10,marginVertical:10,flexDirection:"row",overflow:"hidden",justifyContent:"space-between",alignItems:"center",gap:10}}>
            <View style = {{alignItems:"center",borderRadius:10,backgroundColor:"#0077b6"}}>
               
                <FontAwesome5 name = {"wallet"} size = {30} color = {"white"} style = {{marginVertical:5}} />
            
                <Text  style = {{fontSize:15,fontWeight:"600",color:"white",marginBottom:5,marginHorizontal:5}}>PhonePe Wallet</Text>
            </View>
            <View style = {{alignItems:"center",width:100,borderRadius:10,backgroundColor:"#0077b6"}}>
                
                <MaterialIcons name = {"storefront"} size = {30} color = {"white"} style = {{marginVertical:5}}  />
                
                <Text  style = {{fontSize:15,fontWeight:"600",color:"white",marginBottom:5,marginHorizontal:5}}>Rewards</Text>
            </View>
            <View style = {{alignItems:"center",borderRadius:10,backgroundColor:"#0077b6"}}>
               
                <MaterialCommunityIcons name = {"home-thermometer-outline"} size = {30} color = {"white"}  style = {{marginVertical:5}} />
                
                <Text  style = {{fontSize:15,fontWeight:"600",color:"white",marginBottom:5,marginHorizontal:5}}>Refer & Get RS 100</Text>
            </View>
           
        </View>
        

    )
}
export default Three;