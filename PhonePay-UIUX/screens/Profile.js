import React from "react";
import { ScrollView,View,Text,Image,Pressable } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const Profile = ()=>{
    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:"Profile",
            headerStyle:{
                backgroundColor:"#7209b7",
                
                
            },
            headerTitleStyle:{
                color:"white",
                fontSize:20,
                fontWeight:"bold",
                
            },
            headerLeft:()=>(
              <Pressable onPress={()=>navigation.goBack()}>
               <Text> <AntDesign name="arrowleft" size={24} color="white" style = {{marginHorizontal:10}} /></Text>
                </Pressable>
            ),
            headerRight:()=>(
                
               
               <FontAwesome name = {"question-circle-o"} size = {24} color = {"white"} style = {{marginHorizontal:10}}/>
            
            )
        });
    },[]);
   
    return (
        <ScrollView vertival = {true} showsVerticalScrollIndicator = {false}>
        <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
             <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5,marginHorizontal:10,marginVertical:10}}>
             <Image source={{uri:"https://th.bing.com/th/id/OIP.0czELubF1xkJDO8BXdUHQgHaDV?rs=1&pid=ImgDetMain"}} style = {{width:60,height:60,borderRadius:50,marginHorizontal:15,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:18,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>******7450</Text>
             <Text style = {{fontSize:18,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>8435697450</Text>
             </View>
              
                </View>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:5,marginVertical:5}}/>
            </View>
            <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
             <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5,marginHorizontal:10,marginVertical:10}}>
             <MaterialIcons name = {"qr-code-scanner"} size = {24} color = {"black"} />
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>My QRCode</Text>
             
                <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>UPID:-</Text>
                </View>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:5,marginVertical:5}}/>
            </View>
            <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            <Text style = {{fontSize:15,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>Payment Method</Text>
            <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"space-between",alignItems:"center"}}>
                <View style = {{alignItems:"center",width:"23%"}}>
                    
                    <AntDesign name = {"home"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Bank Accounts</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                   
                    <AntDesign name = {"creditcard"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Debit & Credit Cards </Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                   
                    <AntDesign name = {"wallet"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                   
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>PhonePe Wallets</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                    
                    <FontAwesome5 name = {"award"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                   
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>PhonePe Gift Card</Text>
                </View>
                </View>
                <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"flex-start",alignItems:"center"}}>
                <View style = {{alignItems:"center",width:"23%"}}>
                <Image  style = {{width:40,height:40,borderRadius:10}} source={{uri:"https://telecomtalk.info/wp-content/uploads/2022/09/upi-lite-what-is-it-and-its-features.jpg"}}/>
                    
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>UPI Lite</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                <Image  style = {{width:40,height:40,borderRadius:10}} source={{uri:"https://www.goodreturns.in/img/2019/08/rupay-logo-1566548358.jpeg"}}/>
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>RuPay Credit on UPI</Text>
                </View>
                
                
                
            
                
                
            </View>
            </View>
            <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            <Text style = {{fontSize:15,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>Payment Management</Text>
            <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",gap:15}}>
                <View style = {{alignItems:"center",width:"23%"}}>
                    
                    <AntDesign name = {"reload1"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>AutoPay</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                    
                    <Entypo name = {"network"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>International</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                    
                    <Ionicons name = {"at-circle-outline"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>UPI Settings</Text>
                </View>
               
                </View>
                
            </View>
            <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            <Text style = {{fontSize:15,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>Settings & Preference</Text>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome name = {"language"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Languages</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>Chosen Language:-English</Text>
                </View>
                </View>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:10,marginVertical:5}}/>
                </View>
                <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <Entypo name = {"notification"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Bill Notifications</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>Receive Alerts when bill is generated</Text>
                </View>
                </View>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:10,marginVertical:5}}/>
                </View>
                <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome5 name = {"newspaper"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Permissions</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>Manage data sharing settings</Text>
                </View>
                </View>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:10,marginVertical:5}}/>
                </View>
                <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome6 name = {"circle-half-stroke"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Theme</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>Choose between light and dark mode</Text>
                </View>
                </View>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:10,marginVertical:5}}/>
                </View>
                <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome6 name = {"database"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Data Preferences</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>manage all the shared information</Text>
                </View>
                </View>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:10,marginVertical:5}}/>
                </View>
                <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome5 name = {"ring"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Reminders</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>Never miss another bill payment</Text>
                </View>
                </View>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:10,marginVertical:5}}/>
                </View>
                
            </View>
            <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            <Text style = {{fontSize:15,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>Security</Text>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <MaterialCommunityIcons name = {"fingerprint"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Screen Lock</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>Biometric & Screen Locks</Text>
                </View>
                </View>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:10,marginVertical:5}}/>
                </View>
                <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <MaterialCommunityIcons name = {"key-outline"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Set Up Password</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>Secure your account with a password</Text>
                </View>
                </View>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:10,marginVertical:5}}/>
                </View>
                <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <MaterialCommunityIcons name = {"contacts-outline"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Blocked Contacts</Text>
             
                
                </View>
                </View>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:10,marginVertical:5}}/>
                </View>
                </View>
                <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
             <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome name = {"mobile-phone"} size = {24} color = {"black"} />
           <View>
             
                <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5}}>About PhonePe</Text>
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>Privacy Policy, Terms & About PhonePe</Text>
                </View>
                </View>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:5,marginVertical:5}}/>
            </View>
            <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
             <View style = {{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <MaterialCommunityIcons name = {"chevron-right-box-outline"} size = {24} color = {"black"} />
           
             
                <Text style = {{fontSize:14,fontWeight:"600",color:"red",marginHorizontal:5,marginVertical:5}}>LOGOUT</Text>
                
                </View>
               
            </View>
        </ScrollView>

    )
}
export default Profile;