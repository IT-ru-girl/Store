import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../type/Types.tsx';
import huawei from '../img/7f9fcf33-931f-42c6-a0af-f45034e50ec1.webp';
import acer from '../img/663af186-befc-46b5-a655-14e982d23756.webp';
import mate from '../img/0977320b-08ab-4063-bb54-d7d121d22b0f.webp';

interface IProductSlice {
  products: IProduct[],
  isModalOpen: boolean
}

const initialState: IProductSlice = {
  products: [{
    id: '1',
    image: huawei,
    name: 'Ноутбук Huawei MateBook',
    price: 64990,
    quantity: 12
  },
    {
      id: '2',
      image: acer,
      name: 'Ноутбук Acer Aspire 3',
      price: 49990,
      quantity: 5
    },
    {
      id: '3',
      image: mate,
      name: 'Ноутбук Huawei MateBook 14',
      price: 99990,
      quantity: 6
    }],
  isModalOpen: false
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },

    toggleModal: (state, action) => {
      state.isModalOpen = action.payload;
    }
  }
});

export const productsActions = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
