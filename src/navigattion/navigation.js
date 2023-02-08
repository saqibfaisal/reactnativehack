import { CardStyleInterpolators, createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import React from "react";
import Login from '../authentication/screen/Login';
import Signup from '../authentication/screen/singup';
import { StyleSheet } from 'react-native'
import Welcome from '../authentication/screen/Welcome';
import Home from "../assets/Home.png"
// import HomeScreen from '../authenticated/HomeScreen';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
    // screenOptions={({ navigation }) => {
    //   return {
    //     // gestureEnabled: true,
    //     // TransitionSpecs: {duration: 500},
    //     detachPreviousScreen: !navigation.isFocused(),
    //     headerShown: false,
    //     cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    //     animation: Platform.OS == 'ios' ? 'default' : 'slide_from_right',
    //     onTransitionStart: () => Keyboard.dismiss(),
    //   };
    // }}
    >

      {/* <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}
      // options={{
      //   transitionSpec: {
      //     open: config,
      //     close: closeConfig,
      //   },
      //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      //   headerShown: false,
      // }}
      />
      {/* <Stack.Screen name="HomeScreen" component={TabNavigator} options={{ headerShown: false }}  */}
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
    </Tab.Navigator>
  )
}
// const styles = StyleSheet.create({

// const config = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 50,
//     mass: 1,
//     overshootClamping: false,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };

// const closeConfig = {
//   animation: 'timing',
//   config: {
//     duration: 2,
//     // easing: Easing.linear,
//   },
// };
// })