import { Container, CssBaseline } from '@mui/material';

import { Header } from './components/Header/Header';
import { InputForm } from './Input.tsx';
import { Cart } from './components/Cart';
import { Products } from './components/Product/Products.tsx';
import ProductAddModal from './components/Product/ProductAddModal.tsx';



export const Shop = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <InputForm />
        <Cart />
        <ProductAddModal/>
        <Products />
      </Container>
    </>
  );
};
