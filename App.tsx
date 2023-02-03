import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigattion/navigation';
import Singup from './src/authentication/screen/singup';
function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    // <View>
    //   <Text>helllllllllllll</Text>
    // </View>
    // <Singup/>
  )
}
export default App