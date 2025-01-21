import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  IProduct } from '../../pages/shop/ShopTypes.tsx';

import { nanoid } from 'nanoid';



const initialState:  IProduct[] =
 [{
    id: nanoid(),
    image: '',
    name: 'Ноутбук Huawei MateBook',
    price: 64990,
    quantity: 12
  },
    {
      id: nanoid(),
      image: 'acer',
      name: 'Ноутбук Acer Aspire 3',
      price: 49990,
      quantity: 5
    },
    {
      id: nanoid(),
      image: 'acer',
      name: 'Ноутбук Huawei MateBook 14',
      price: 99990,
      quantity: 6
    },
   {
     id: nanoid(),
     image: 'acer',
     name: 'Ноутбук Huawei MateBook',
     price: 64980,
     quantity: 12
   },
   {
     id: nanoid(),
     image: 'acer',
     name: 'Ноутбук Acer Aspire 3',
     price: 49590,
     quantity: 5
   },
   {
     id: nanoid(),
     image: 'acer',
     name: 'Ноутбук Huawei MateBook 14',
     price: 79990,
     quantity: 6
   },
   {
     id: nanoid(),
     image: 'acer',
     name: 'Ноутбук Huawei MateBook',
     price: 44990,
     quantity: 12
   },
   {
     id: nanoid(),
     image: 'acer',
     name: 'Ноутбук Acer Aspire 3',
     price: 19990,
     quantity: 5
   },
   {
     id: nanoid(),
     image: 'acer',
     name: 'Ноутбук Huawei MateBook 14',
     price: 39990,
     quantity: 6
   },
   {
     id: nanoid(),
     image: 'acer',
     name: 'Ноутбук Acer Aspire 3',
     price: 67990,
     quantity: 5
   },
   {
     id: nanoid(),
     image: 'acer',
     name: 'Ноутбук Huawei MateBook 14',
     price: 69990,
     quantity: 6
   },
 ]
;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    deleteProduct: (state, action: PayloadAction<string>) => {
      return  state.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action: PayloadAction<IProduct>) => {
      const index = state.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },

  }
});

export const {updateProduct, deleteProduct} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
