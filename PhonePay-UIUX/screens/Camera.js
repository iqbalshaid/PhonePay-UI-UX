import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, View,Pressable} from 'react-native';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function Cameras() {
    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:"Scan QRCODE",
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
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
 

  useEffect(() => {
    requestPermission();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes: Code[]) => {
      // Update the state with the latest scanned data
      
      console.log(codes[0].value);
    },
  });

  if (device == null) {
    return (
      <View>
        <Text>Device Not Found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        codeScanner={codeScanner}
        device={device}
        isActive={true}
      />
     
     <View style = {{flexDirection:"row",justifyContent:"center",alignItems:"center",marginVertical:10,gap:20}}>
     <Entypo name = {"folder-images"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
     <Entypo name = {"flash"} size = {30} color = {"#7209b7"} style = {{marginVertical:5}}/>
     </View>
     </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    
    height:150,
    marginVertical:200,
    marginHorizontal:35,
    flex:1,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  
 
});

export default Cameras;