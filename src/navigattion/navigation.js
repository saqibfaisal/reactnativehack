import { CardStyleInterpolators, createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import React from "react";
import Login from '../authentication/screen/Login';
import Signup from '../authentication/screen/singup';
import { StyleSheet } from 'react-native'
import Welcome from '../authentication/screen/Welcome';
import Home from "../assets/Home.png"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../authenticated/HomeScreen';
import { Image } from 'react-native';
import favoritess from "../assets/favoritess.png";
import WhiteList from "../assets/WhiteList.png";
import man from "../assets/man.png";
import Favorite from '../authenticated/Fovarite';
import Checkout from '../authenticated/Checkout';
import Menu from '../authenticated/Menu';
import OrderDone from '../authenticated/OrderDone';
import detail from '../authenticated/detail';
import Profile from '../authenticated/Style/Profile';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
    >

      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}
      />
      <Stack.Screen name="HomeScreen" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="detail" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Checkouts" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Order" component={OrderDone} options={{ headerShown: false }} />
      <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
      <Stack.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Image source={Home} />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="detail"
        component={detail}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Image source={favoritess} />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Checkouts"
        component={Checkout}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Image source={WhiteList} />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Image source={man} />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  )
}