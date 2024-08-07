import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import History from "../screens/History";
import Wealth from "../screens/Wealth";
import Insurance from "../components/Insurance";
import Store from "../screens/Store";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import Feather from "react-native-vector-icons/Feather"
import InsuranceHome from "../screens/InsuranceHome";
import Profile from "../screens/Profile";
import Mobile from "../screens/MobileNumber";
import LocationScreen from "../screens/Location";
import Cameras from "../screens/Camera";
import Notification from "../screens/Notiication";

const Stacks = ()=>{
    const Stack = createStackNavigator();
    const Tabs = createBottomTabNavigator();
    function BottomTabs(){
        return (
            <Tabs.Navigator>
                <Tabs.Screen name="home" component={Home}
                    options={{tabBarLabel:"home",
                    tabBarLabelStyle:({focused})=>
                        ({
  color: focused ? "#7209b7" : "grey",
  fontSize:focused? 20:16,
}),
                    headerShown:false,
                    tabBarIcon:({focused}) =>
                        focused?(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"#7209b7",alignItems:"center"}}>
                            <FontAwesome name="home" size={24} color="white" style = {{marginVertical:4}}/>
                            </View>
                        ):(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"grey",alignItems:"center"}}>
                            <AntDesign name="home" size={24} color="white" style = {{marginVertical:4}} />
                            </View>
                        )
                    }}
                />
                <Tabs.Screen name="store" component={Store}
                    options={{tabBarLabel:"Store",
                   tabBarLabelStyle:({focused})=>
                        ({
  color: focused ? "#7209b7" : "grey",
  fontSize:focused? 20:16,
}),
                    headerShown:false,
                    tabBarIcon:({focused}) =>
                        focused?(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"#7209b7",alignItems:"center"}}>
                            <FontAwesome name="rupee" size={24} color="white" style = {{marginVertical:4}}/>
                            </View>
                        ):(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"grey",alignItems:"center"}}>
                            <FontAwesome name="rupee" size={24} color="white" style = {{marginVertical:4}}/>
                            </View>
                        )
                    }}
                />
                <Tabs.Screen name="insurancehome" component={InsuranceHome}
                    options={{tabBarLabel:"Insurance",
                    tabBarLabelStyle:({focused})=>
                        ({
  color: focused ? "#7209b7" : "grey",
  marginBottom:focused? 20:0,
}),
                    headerShown:false,
                    tabBarIcon:({focused}) =>
                        focused?(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"#7209b7",alignItems:"center"}}>
                            <FontAwesome name="send" size={24} color="white" style = {{marginVertical:4}}/>
                            </View>
                        ):(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"grey",alignItems:"center"}}>
                            <FontAwesome name="send" size={24} color="white" style = {{marginVertical:4}} />
                            </View>
                        )
                    }}
                />
                <Tabs.Screen name="wealth" component={Wealth}
                    options={{tabBarLabel:"Wealth",
                    tabBarLabelStyle:({focused})=>
                        ({
  color: focused ? "#7209b7" : "grey",
  fontSize:focused? 20:16,
}),
                    headerShown:false,
                    tabBarIcon:({focused}) =>
                        focused?(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"#7209b7",alignItems:"center"}}>
                            <Feather name="arrow-up-right" size={24} color="white" style = {{marginVertical:4}} />
                            </View>
                        ):(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"grey",alignItems:"center"}}>
                            <Feather name="arrow-up-right" size={24} color="white" style = {{marginVertical:4}}/>
                            </View>
                        )
                    }}
                />
                <Tabs.Screen name="history" component={History}
                    options={{tabBarLabel:"History",
                    tabBarLabelStyle:({focused})=>
                        ({
  color: focused ? "#7209b7" : "grey",
  fontSize:focused? 20:16,
}),
                    headerShown:false,
                    tabBarIcon:({focused}) =>
                        focused?(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"#7209b7",alignItems:"center"}}>
                            <MaterialIcons name="history" size={24} color="white" style = {{marginVertical:4}} />
                            </View>
                        ):(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"grey",alignItems:"center"}}>
                            <MaterialIcons name="history" size={24} color="white" style = {{marginVertical:4}} />
                            </View>
                        )
                    }}
                />
            </Tabs.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name = "main" component = {BottomTabs} options={{ headerShown: false }}  />
                <Stack.Screen name = "profile" component = {Profile} options={{ headerShown: true }}  />
                <Stack.Screen name = "mobile" component = {Mobile} options={{ headerShown: true }}  />
                <Stack.Screen name = "location" component = {LocationScreen} options={{ headerShown: false }}  />
                <Stack.Screen name = "cameras" component = {Cameras} options={{ headerShown: true }}  />
                <Stack.Screen name = "notification" component = {Notification} options={{ headerShown: true }}  />
                

            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default Stacks;