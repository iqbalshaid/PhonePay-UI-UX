import React from "react";
import { Image, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
const Apps = ()=>{
    return (
        <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
        
        <Text style = {{fontSize:15,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>App by PhonePe</Text>
       

        <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"space-between",alignItems:"center"}}>
            <View style = {{alignItems:"center",width:"30%"}}>
               
                <Image  style = {{width:40,height:40,borderRadius:10}} source={{uri:"https://th.bing.com/th/id/OIP.dvoBPPjy9VW-59iNspdbmwHaEK?rs=1&pid=ImgDetMain"}}/>
            
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>Share Market</Text>
            </View>
            <View style = {{alignItems:"center",width:"30%"}}>
                
            <Image  style = {{width:40,height:40,borderRadius:10}} source={{uri:"https://th.bing.com/th/id/OIP.kCcKmtpcKRK2vhgTFQ4N2gAAAA?rs=1&pid=ImgDetMain"}}/>
                
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>Business</Text>
            </View>
            <View style = {{alignItems:"center",width:"30%"}}>
               
            <Image  style = {{width:40,height:40,borderRadius:10}} source={{uri:"https://images.hindustantimes.com/tech/img/2023/09/23/960x540/F6ttitUaAAAP1H-_1695483751462_1695483764508.jfif"}}/>
                
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>Indus AppStore</Text>
            </View>
            
        </View>
        
    </View>
    )
}
export default Apps;