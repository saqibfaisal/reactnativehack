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
      <Stack.Screen name="Favorite" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Checkout" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Menu" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Order" component={OrderDone} options={{ headerShown: false }} />
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
              {/* <Icon
                    name={focused ? 'restaurant-menu' : 'restaurant'}
                    size={25}
                    color={focused ? '#FA4A0C' : 'black'}
                  /> */}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Image source={favoritess} />
              {/* <Icon
                    name={focused ? 'restaurant-menu' : 'restaurant'}
                    size={25}
                    color={focused ? '#FA4A0C' : 'black'}
                  /> */}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Checkout"
        component={Checkout}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Image source={WhiteList} />
              {/* <Icon
                    name={focused ? 'restaurant-menu' : 'restaurant'}
                    size={25}
                    color={focused ? '#FA4A0C' : 'black'}
                  /> */}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Image source={man} />
              {/* <Icon
                    name={focused ? 'restaurant-menu' : 'restaurant'}
                    size={25}
                    color={focused ? '#FA4A0C' : 'black'}
                  /> */}
            </>
          ),
        }}
      />
    </Tab.Navigator>
  )
}