import React from "react";
import Navbar from "../components/Navbar";
import { ScrollView, Text, TextInput, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
const InsuranceHome = ()=>{
    return (
        <View>
        <Navbar />
        <ScrollView vertical = {true} showsVerticalScrollIndicator = {false}> 
        <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            <Text style = {{fontSize:15,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>Insure your Vehicle</Text>
            <View style = {{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:15}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome name = {"language"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Bike</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>From RS538/yr</Text>
                </View>
                </View>
                <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome name = {"language"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Car</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>From RS2094/yr</Text>
                </View>
                </View>
                </View>
                <Text style = {{textAlign:"center",fontSize:16,fontWeight:"400",color:"black",marginVertical:10}}>Or,provide vehicle registration number</Text>
                <TextInput  placeholder="Eg.KA00XX0000" style = {{padding:15,marginHorizontal:10,marginVertical:5,borderRadius:5,borderColor:"grey",borderWidth:1}}/>
                </View>
        <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            <Text style = {{fontSize:15,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>Insurance self and Family</Text>
            <View style = {{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:15}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome name = {"language"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Health</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>Up to Rs1 Cr Cover</Text>
                </View>
                </View>
                <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome name = {"language"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Life</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>Available 10% disco...</Text>
                </View>
                </View>
                </View>
                </View>
        
        <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            <Text style = {{fontSize:15,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>Insurance self and family</Text>
            <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"space-between",alignItems:"center"}}>
                <View style = {{alignItems:"center",width:"23%"}}>
                    
                    <AntDesign name = {"home"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Travel Insurance</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                   
                    <AntDesign name = {"creditcard"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Accident</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                   
                    <AntDesign name = {"wallet"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                   
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Super Top-Up</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                    
                    <FontAwesome5 name = {"award"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                   
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Shop Insurance</Text>
                </View>
                </View>
                <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"flex-start",alignItems:"center"}}>
                <View style = {{alignItems:"center",width:"23%"}}>
                <FontAwesome5 name = {"award"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                   
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Insurance Renewal</Text>
                </View>
                
                
                
                
            
                
                
            </View>
            </View>
            <Text style = {{fontSize:12,fontWeight:"200",color:"black",marginHorizontal:10,marginTop:5,overflow:"hidden",marginBottom:70}}>PhonePe, a popular digital payments and financial services platform in India, offers a variety of financial products and services under its "Wealth" function. The "Wealth" section aims to provide users with easy access to 
            various investment and wealth management options. Here are some of the <Text style = {{color:"#7209b7"}}>key features and offerings you might find under PhonePe Wealth:</Text></Text>
            
        </ScrollView> 
        </View>

        
    )
}
export default InsuranceHome;