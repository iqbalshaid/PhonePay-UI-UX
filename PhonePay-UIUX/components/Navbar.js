import React from "react";
import { Image, View,Text, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native";
const Navbar = ()=>{
    const navigation = useNavigation();
    return (
        <View style = {{width :"100%",height:60,backgroundColor:"#7209b7",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:10,marginVertical:10,marginHorizontal:10}}>
            <Pressable onPress={()=>navigation.navigate("profile")}>
            <Image source={{uri:"https://th.bing.com/th/id/OIP.0czELubF1xkJDO8BXdUHQgHaDV?rs=1&pid=ImgDetMain"}} style = {{width:40,height:40,borderRadius:50}} 
        
            />
            </Pressable>
                <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
                <View>
                    <Text style = {{fontSize:18,fontWeight:"bold",color:"white"}}>Add Address</Text>
                    <Text style = {{fontSize:14,fontWeight:"600",color:"grey"}}>Birgaon</Text>
                    </View>
                    <AntDesign name = {"caretdown"} size = {13} color = {"white"} style = {{marginBottom:15}} onPress={()=>navigation.navigate("location")}/>
                    
                </View>
            </View>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginVertical:10,marginHorizontal:10}}>
             <MaterialIcons name = {"qr-code-scanner"} size = {24} color = {"white"} onPress={()=>navigation.navigate("cameras")}/>
             <Ionicons name = {"notifications-outline"} size = {24} color = {"white"} onPress={()=>navigation.navigate("notification")} />
             <FontAwesome name = {"question-circle-o"} size = {24} color = {"white"} />
            </View>
        </View>
    )
}
export default Navbar;