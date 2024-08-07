import React from "react"
import { ScrollView, View,Text, Image,TextInput } from "react-native";
import Navbar from "../components/Navbar";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import Feather from "react-native-vector-icons/Feather"
const Wealth = ()=>{
    return (
        <View>
        <Navbar />
        <ScrollView vertical = {true} showsVerticalScrollIndicator = {false}>
        <View style = {{padding:7,flexDirection:"row",gap:10,borderWidth:1,borderColor:"grey",borderRadius:30,marginHorizontal:10,marginVertical:10}}>
            <Feather name = {"search"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:8}} />
            <TextInput  placeholder="Search by name,number or UPI ID" style = {{fontSize:16,fontWeight:"500",color:"grey",padding:8}} value=""/>
            </View>
             <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            <Text style = {{fontSize:15,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>Investment Ideas</Text>
            <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"space-between",alignItems:"center"}}>
                <View style = {{alignItems:"center",width:"23%"}}>
                    
                    <AntDesign name = {"home"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Best SIP Funds</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                   
                    <AntDesign name = {"creditcard"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Tax Saving Funds</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                   
                    <AntDesign name = {"wallet"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                   
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>3-in-1 Funds</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                    
                    <FontAwesome5 name = {"award"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                   
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Start with RS100</Text>
                </View>
                </View>
                <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"space-between",alignItems:"center"}}>
                <View style = {{alignItems:"center",width:"23%"}}>
                
                    <FontAwesome5 name = {"award"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Top Companies</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                
                <FontAwesome5 name = {"award"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Trending Themes</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                
                <FontAwesome5 name = {"award"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Gold Funds</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                
                <FontAwesome5 name = {"award"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Top Performing...</Text>
                </View>
                
                
                
            
                
                
            </View>
            </View>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5,marginHorizontal:10,marginVertical:10,overflow:"hidden"}}>
                <View style = {{marginHorizontal:10,marginVertical:10,height:"auto",width:"45%",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
                    <Image />
                    <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:10,marginVertical:10}}>
                        <Text>Learn:Basics of investing in Mutual Funds</Text>
                        <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:10,marginVertical:5}}/>
                    </View>
                </View>
                <View style = {{marginHorizontal:10,marginVertical:10,height:"auto",width:"45%",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
                <Image />
                    <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:10,marginVertical:10}}>
                        <Text>SIP Calculator: Find how your investment can grow</Text>
                        <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginVertical:5}}/>
                    </View>
                </View>
            </View>
            <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             <FontAwesome name = {"language"} size = {24} color = {"black"} style = {{marginHorizontal:5,marginVertical:5}} />
             <View>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>Explore all Funds</Text>
             
                <Text style = {{fontSize:11,fontWeight:"400",color:"grey",marginHorizontal:5}}>pick a fund on your own</Text>
                </View>
                </View>
                <AntDesign name = {"right"} size = {18} color = {"grey"} style = {{marginHorizontal:10,marginVertical:5}}/>
                </View>
                </View>

            <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
            <Text style = {{fontSize:15,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>Mutual Fund Categories</Text>
            <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"space-between",alignItems:"center"}}>
                <View style = {{alignItems:"center",width:"23%"}}>
                    
                    <AntDesign name = {"home"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Large Cap</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                   
                    <AntDesign name = {"creditcard"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Large & Mid Cap</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                   
                    <AntDesign name = {"wallet"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                   
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Mid Cap</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                    
                    <FontAwesome5 name = {"award"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                   
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Small Cap</Text>
                </View>
                </View>
                <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"space-between",alignItems:"center"}}>
                <View style = {{alignItems:"center",width:"23%"}}>
                
                    <FontAwesome5 name = {"award"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Flexi Cap</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                
                <FontAwesome5 name = {"award"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Gold</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                
                <FontAwesome5 name = {"award"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Index</Text>
                </View>
                <View style = {{alignItems:"center",width:"23%"}}>
                
                <FontAwesome5 name = {"award"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
                    <Text  style = {{fontSize:12,fontWeight:"400",color:"black",marginTop:5}}>Value</Text>
                </View>
                
                
                
            
                
                
            </View>
            </View>
            <Text style = {{fontSize:12,fontWeight:"200",color:"black",marginHorizontal:10,marginTop:5,overflow:"hidden",marginBottom:70}}>PhonePe, a popular digital payments and financial services platform in India, offers a variety of financial products and services under its "Wealth" function. The "Wealth" section aims to provide users with easy access to 
            various investment and wealth management options. Here are some of the <Text style = {{color:"#7209b7"}}>key features and offerings you might find under PhonePe Wealth:</Text></Text>
        </ScrollView>
        </View>

    )
}
export default Wealth;