import { INewProduct, ProductsState } from '../../pages/shop/Types.tsx';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: ProductsState = {
  items: [],
};
const newProductSlice =createSlice({

  name: 'new product',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<INewProduct>) {
      state.items.push(action.payload);
    },
    clearProduct(state) {
      state.items = []; // Очистить весь список товаров
    },
  }
})
 export const {addProduct, clearProduct}=newProductSlice.actions
export const newProductReducer = newProductSlice.reducer
