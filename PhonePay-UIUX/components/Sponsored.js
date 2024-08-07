import React from "react";
import { Image, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
const Sponsored = ()=>{
    return (
        <View style = {{marginHorizontal:10,marginVertical:10,width:"95%",height:"auto",borderRadius:10,borderColor:"#dad7cd",backgroundColor:"white",borderWidth:2}}>
        
        <Text style = {{fontSize:15,fontWeight:"600",color:"black",marginHorizontal:10,marginVertical:5}}>Sponsored </Text>
       

        <View style = {{marginHorizontal:10,marginVertical:5,flexDirection:"row",overflow:"hidden",justifyContent:"space-between",alignItems:"center"}}>
            <View style = {{alignItems:"center",width:"23%"}}>
               
                <Image  style = {{width:40,height:40,borderRadius:10}} source={{uri:"https://www.a23.com/blog/wp-content/uploads/2023/03/Rummy-is-just-not-a-game-for-you-to-play.jpg"}}/>
            
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>A23 Rummy</Text>
            </View>
            <View style = {{alignItems:"center",width:"23%"}}>
                
            <Image  style = {{width:40,height:40,borderRadius:10}} source={{uri:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKw0ENU8v-56ZqpvGaEmDjkmpvAk6-2nLjDaZuZgGB1tfofuWOMBPXXb-6Ur9Vx4Qdb3TdD27CUQOp_bPnsJmZnVViowIp5eu6IlJqTO5fPZKHzpHFIgc46yzhm_BsMv-3Hg8TcRBhDBDMZIA5aeq9-ppAaKhL576segGqYB-IXAGfpZ0miNJ_seXEj5E/s1200/taj.jpg"}}/>
                
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>Taj Rummy</Text>
            </View>
            <View style = {{alignItems:"center",width:"23%"}}>
               
            <Image  style = {{width:40,height:40,borderRadius:10}} source={{uri:"https://play-lh.googleusercontent.com/BL_C9-e7smnKI-iqHe861z_JcbA0S2Naoh4YlWqAoT8MHSP7LCG0W72Bgo0Z4xrPjXyK"}}/>
                
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>RummyCircle</Text>
            </View>
            <View style = {{alignItems:"center",width:"23%"}}>
                
            <Image  style = {{width:40,height:40,borderRadius:10}} source={{uri:"https://th.bing.com/th/id/OIP.46QJprzDI62nOwgaLE4MAAHaEK?rs=1&pid=ImgDetMain"}}/>
                
                <Text  style = {{fontSize:15,fontWeight:"600",color:"black",marginTop:5}}>MPL Cards</Text>
            </View>
        </View>
        
    </View>
    )
}
export default Sponsored;