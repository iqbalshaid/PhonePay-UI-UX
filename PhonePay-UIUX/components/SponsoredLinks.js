import React from "react";
import { Image, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
const SponsoredLinks = ()=>{
    return (
        <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
        
        <Text style = {{fontSize:15,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>Sponsored Games</Text>
       

        <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"space-between",alignItems:"center"}}>
            <View style = {{alignItems:"center",width:"23%"}}>
               
                <Image  style = {{width:40,height:40,borderRadius:10}} source={{uri:"https://th.bing.com/th/id/OIP.rNEaBn7d0wWDcL5efyQe7AHaEK?rs=1&pid=ImgDetMain"}}/>
            
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>WinZo Ludo</Text>
            </View>
            <View style = {{alignItems:"center",width:"23%"}}>
                
            <Image  style = {{width:40,height:40,borderRadius:10}} source={{uri:"https://th.bing.com/th/id/OIP.la-ZiQuRAl5BXVh1TmmC-wHaD4?rs=1&pid=ImgDetMain"}}/>
                
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>Junglee Rummy</Text>
            </View>
            <View style = {{alignItems:"center",width:"23%"}}>
               
            <Image  style = {{width:40,height:40,borderRadius:10}} source={{uri:"https://cardinsider.com/wp-content/uploads/2022/08/Tata-Neu-Infinity-HDFC-bank-Credit-Card.png"}}/>
                
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>NeuCard</Text>
            </View>
            <View style = {{alignItems:"center",width:"23%"}}>
                
            <Image  style = {{width:40,height:40,borderRadius:10}} source={{uri:"https://www.companieshistory.com/wp-content/uploads/2021/12/Bajaj-Finserv-Limited-logo.jpg"}}/>
                
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>Bajaj Finserv</Text>
            </View>
        </View>
        
    </View>
    )
}
export default SponsoredLinks;