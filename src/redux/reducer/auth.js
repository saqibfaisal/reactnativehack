
import { createSlice } from '@reduxjs/toolkit'
export interface AuthState {
    token: string
  }
  
  const initialState: AuthState = {
    token: ''
  }
  
  export const authState = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      token: (state, action) => {
        state.token = action.payload;
      }
  
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { onboarding, token } = authState.actions
  
  export default authState.reducer
  export function registerUser(requestOptions) {
    // console.log('hello',requestOptions)
    return function thunkForRegister(dispatch, getState) {
      try {
  
        // fetch("http://192.168.18.205:5001/api/v1/auth/register/email", requestOptions)
        //   .then(response => response.json())
        //   .then(result => {
        //     console.log('ye chalgaya hai', result)
        //     dispatch(token(result?.token))
        //     let newtoken
        //     newtoken = token(result?.token)
        //     // AsyncStorage.setItem("token", newtoken).then((res) => {
        //     ToastAndroid.show("User Successfully Create", 2000)
        //     console.log(newtoken);
        //     // })
        //     //   .catch(error => console.log('error', error));
  
        //   })
      }
      catch (err) {
        console.log('error', err);
      }
    }
  }