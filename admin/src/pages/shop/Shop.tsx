import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from './components/Header/Header';
import { InputForm } from './Input.tsx';
import { Cart } from './components/Cart';
import { Products } from './components/Product/Products.tsx';
import ProductAddModal from './components/Product/ProductAddModal.tsx';
import { FilterPanel } from './components/Filter/FilterPanel.tsx';



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
