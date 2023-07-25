import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Assuming the cartSlice exports the reducer function as default
import productReducer from './productSlice'; // Assuming the productSlice exports the reducer function as default
import authReducer from './authSlice';
import loginReducer from './login.reducer';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    products: productReducer,
    login:loginReducer,
  },
});

export default store;
