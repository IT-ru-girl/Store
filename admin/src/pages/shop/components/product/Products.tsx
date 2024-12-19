import { Grid } from '@mui/material';
import { ProductItem } from './ProductItem.tsx';
import { RootState } from '../../../../app/store.ts';
import { useTypedSelector } from '../hooks/useTypedSelector.ts';


export const Products = ({}) => {
  const {products} = useTypedSelector((state: RootState) => state.products);
  return (
    <Grid container spacing={4} style={{ padding: '20px' }}>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Grid>
  );
};
