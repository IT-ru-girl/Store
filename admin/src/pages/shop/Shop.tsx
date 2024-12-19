import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from './header/Header';
import { ICartItem } from './type/Types';
import { InputForm } from './Input.tsx';
import { Cart } from './components/cart';
import { Products } from './components/product/Products.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';

import AddProductModal from './components/product/AddProductModal.tsx';


export const cartItems: ICartItem[] = [];
export const Shop = () => {



  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <InputForm />
        <Cart />
        <Products />
        <AddProductModal/>
      </Container>
    </>
  );
};
