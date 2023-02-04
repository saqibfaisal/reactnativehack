import { CardStyleInterpolators, createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import React from "react";
import Login from '../authentication/screen/Login';
import Signup from '../authentication/screen/singup';
import { StyleSheet } from 'react-native'
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
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
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
    </Stack.Navigator>
  );
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