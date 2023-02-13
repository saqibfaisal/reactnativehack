import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import favProdReducer from './favouriteProdSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourites: favProdReducer,
  },
});

export default store;
