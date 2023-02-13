import React from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import avataaars from "../../assets/avataaars.png"
export default function Profile({navigation}) {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1635645262831-0fc4fb679750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&w=1000&q=80',
        }}
        imageStyle={{opacity: 0.9}}
        style={{
          flex: 1,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{
              width: 140,
              height: 140,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: '#fff',
            }}
            source={avataaars}
          />
          <View style={{alignItems: 'center', marginBottom: 40}}>
            <Text
              style={{
                fontSize: 36,
                color: 'white',
                fontWeight: 'bold',
              }}>
              User
            </Text>
            <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontWeight: 'bold',
              }}>
              User@gmail.com
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: 'white',
          height: 300,
          width: 390,
          position: 'absolute',
          zIndex: 999,
          top: 300,
          borderTopRightRadius: 55,
          borderTopLeftRadius: 55,
        }}></View>
    </ScrollView>
  );
}
