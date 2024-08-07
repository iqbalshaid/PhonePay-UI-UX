import React from "react";
import Navbar from "../components/Navbar";
import { Image, Pressable, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from "@react-navigation/native";
const Store = ()=>{
    const navigation = useNavigation();
    return (
        <View>
        <Navbar />
        
        <View style = {{marginVertical:200,marginHorizontal:20,alignItems:"center"}}>
        <Image  source={{uri:"https://th.bing.com/th/id/OIP.XEdm8Jv-79m8s8KCrB_fSwHaEK?rs=1&pid=ImgDetMain"}} style = {{width:200,height:200,marginHorizontal:10,marginVertical:10,borderRadius:20}}/>
            <Text style = {{marginHorizontal:10,marginVertical:5,fontSize:18,fontWeight:"500",color:"black",textAlign:"center"}}>Find your favourite stores on the QR Scanner</Text>
            <Pressable style = {{flexDirection:"row",gap:5,padding:8,backgroundColor:"#7209b7",borderRadius:10,marginHorizontal:10,marginVertical:5}} onPress={()=>navigation.navigate("cameras")}>
            <MaterialIcons name = {"qr-code-scanner"} size = {24} color = {"white"} />
                <Text style = {{textAlign:"center",color:"white"}}>Open QR Scanner</Text>
            </Pressable>
        </View>
        </View>

    )
}
export default Store;