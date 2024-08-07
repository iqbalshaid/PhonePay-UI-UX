import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Easing,
  } from 'react-native';
  import React,{useEffect, useState,useRef} from 'react';
  
  const {width, height} = Dimensions.get('screen');
  
  const SlideItem = ({item}) => {
    const translateYImage = useRef(new Animated.Value(40)).current;
    console.log(item.img,"shahid",translateYImage);
  useEffect(()=>{
    Animated.timing(translateYImage, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  },[item,translateYImage])
  
    return (
      <View style={styles.container}>
        <Animated.Image
          source={{uri:item.img}}
          resizeMode="contain"
          style={[
            styles.image,
            {
              transform: [
                {
                  translateY: 40,
                },
              ],
            },
          ]}
        />
  
        
      </View>
    );
  };
  
  export default SlideItem;
  
  const styles = StyleSheet.create({
    container: {
      width,
      height,
      alignItems: 'center',
    },
    image: {
      flex: 0.6,
      width: '90%',
    },
  });