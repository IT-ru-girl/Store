import { Container, CssBaseline } from '@mui/material';
import { ShopHeader } from './components/ShopHeader';
import { ShopCart } from './components/ShopCart';
import { ShopProducts } from './components/ShopProduct/ShopProducts';
import { ShopProductAddModal } from './components/ShopProduct/ShopModal';




export const Shop = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <ShopHeader />
        <ShopCart />
        <ShopProductAddModal/>
        <ShopProducts />

      </Container>
    </>
  );
};
