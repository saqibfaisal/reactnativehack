import { createStackNavigator } from '@react-navigation/stack';
import React from"react";
import Login from '../authentication/screen/Login';
import Signup from '../authentication/screen/singup';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      // screenOptions={{
      //   headerMode: 'screen',
      //   headerTintColor: 'white',
      //   headerStyle: { backgroundColor: 'tomato' },
      // }}
    >
      <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
      <Stack.Screen name="Signup" component={Signup}  options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}