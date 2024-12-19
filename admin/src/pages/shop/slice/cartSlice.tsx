import { ICartItem, IProduct } from '../type/Types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: ICartItem[] = [];


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.id !== action.payload);
    },
    clearCart: () => {
      return [];
    },
  }
});
export const cartReducer = cartSlice.reducer;
export const cartActions= cartSlice.actions;
