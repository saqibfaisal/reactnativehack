import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigattion/navigation';
import Singup from './src/authentication/screen/singup';
import FlashMessage from 'react-native-flash-message';
import { useRef } from "react"
import Menu from './src/authenticated/Menu';
import OrderDone from './src/authenticated/OrderDone';
function App() {
  const myLocalFlashMessage = useRef('myLocalFlashMessage');



  return (
    <NavigationContainer>
      <MyStack />
      {/* <OrderDone /> */}
      <FlashMessage
        style={{
          // marginHorizontal: 30,
          // top: 60,
          // borderRadius: 10,
          // paddingBottom: 15,
          // elevation: 5555555,

        }}
        floating={true}
        ref={myLocalFlashMessage}
      />
    </NavigationContainer>
  )
}
export default App