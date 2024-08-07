import React from "react";
import { Pressable, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from "@react-navigation/native";
const Transfer = ()=>{

    const navigation = useNavigation();
    return (
        <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            <Text style = {{fontSize:15,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>TransFer Money</Text>
            <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"space-between",alignItems:"center"}}>
                <View style = {{alignItems:"center",width:"23%"}}>
                    <Pressable style = {{width:40,height:40,borderRadius:10,alignItems:"center",backgroundColor:"#7209b7"}} onPress = {()=>navigation.navigate("mobile")}>
                    <MaterialIcons name = {"contact-page"} size = {30} color = {"white"} style = {{marginVertical:5}}/>
                    </Pressable>
                    <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>To Mobile Number</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                    <View style = {{width:40,height:40,borderRadius:10,alignItems:"center",backgroundColor:"#7209b7"}}>
                    <AntDesign name = {"home"} size = {30} color = {"white"} style = {{marginVertical:5}}/>
                    </View>
                    <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>To Bank/UPI ID </Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                    <View style = {{width:40,height:40,borderRadius:10,alignItems:"center",backgroundColor:"#7209b7"}}>
                    <AntDesign name = {"download"} size = {30} color = {"white"} style = {{marginVertical:5}}/>
                    </View>
                    <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>To Self Account</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                    <View style = {{width:40,height:40,borderRadius:10,alignItems:"center",backgroundColor:"#7209b7"}}>
                    <MaterialCommunityIcons name = {"home-outline"} size = {30} color = {"white"} style = {{marginVertical:5}}/>
                    </View>
                    <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>Check Bank Balance</Text>
                </View>
            </View>
            <View style = {{backgroundColor:"#8ecae6",marginHorizontal:5,marginVertical:5,width:"auto",height:"auto",flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:8}}>
                <Text style = {{fontSize:14,fontWeight:"600",color:"grey",marginHorizontal:5,marginVertical:5}}>UPID:-</Text>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:5,marginVertical:5}}/>
            </View>
        </View>

    )
}
export default Transfer;