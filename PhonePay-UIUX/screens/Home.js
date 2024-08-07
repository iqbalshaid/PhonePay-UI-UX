import React,{useRef,useState} from "react";
import { FlatList, Image, ScrollView,Animated,StyleSheet} from "react-native";
import Navbar from "../components/Navbar";
import Transfer from "../components/Transfer";
import Three from "../components/Three";
import Recharge from "../components/Recharge";
import SponsoredLinks from "../components/SponsoredLinks";
import Insurance from "../components/Insurance";
import Travel from "../components/Travel";
import Switch from "../components/Switch";
import Sponsored from "../components/Sponsored";
import Apps from "../components/Apps";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { View,Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"

const Home = ()=>{
    const images = [
        "https://i.ytimg.com/vi/cRpfxxkx8JA/maxresdefault.jpg",
        "https://i.ytimg.com/vi/8D1AIJUOjHI/maxresdefault.jpg",
        "https://th.bing.com/th/id/OIP.XFNVA0vUjae2OcLRnUE8FAHaEB?w=735&h=400&rs=1&pid=ImgDetMain",
        "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-07/Phonepay.jpg",
        "https://thumbs.dreamstime.com/b/cellphone-logo-indian-payments-company-phonepe-pvt-ltd-screen-front-business-website-stuttgart-germany-cellphone-267281521.jpg"
    ];

    return (
        <ScrollView vertical = {true} showsVerticalScrollIndicator = {false}>
            <Navbar />
             
           
             <Transfer />
             <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
             <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5,marginHorizontal:10,marginVertical:10}}>
             <MaterialIcons name = {"qr-code-scanner"} size = {24} color = {"black"} />
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>My QRCode</Text>
             
                <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>UPID:-</Text>
                </View>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:5,marginVertical:5}}/>
            </View>
            <Three />
            <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
             <Image style = {{marginHorizontal:5,marginVertical:5,width:40,height:20}}  source={{uri:"https://telecomtalk.info/wp-content/uploads/2022/09/upi-lite-what-is-it-and-its-features.jpg"}}/>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>PIN-Less Payments</Text>
             
             <View style = {{width:100,height:40,borderRadius:10,alignItems:"center",backgroundColor:"#7209b7",marginHorizontal:5,marginVertical:5}}>
                <Text style = {{fontSize:18,fontWeight:"600",textAlign:"center",color:"white",marginTop:5,marginHorizontal:2}}>TRY NOW</Text>
                </View>
                
                
            </View>
            <Recharge />
            <SponsoredLinks /> 
            <Insurance />
            <Travel />
            <Switch />
            <Sponsored />
            <Apps />
        </ScrollView>

    )
};
const styles = StyleSheet.create({
    
    dotStyle: {
      height: 20,
      width: 20,
      borderRadius: 50,
    },})

export default Home;