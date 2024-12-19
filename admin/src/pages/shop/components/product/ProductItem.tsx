import Card from '@mui/material/Card';
import { CardActions, CardMedia, Grid, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { ButtonBlock, ButtonCard } from '../../header/Header.styles.tsx';
import { FC } from 'react';
import { IProductItem } from '../../type/Types.tsx';
import { RootState } from '../../../../app/store.ts';


import { useActions } from '../hooks/useActions.ts';
import { useTypedSelector } from '../hooks/useTypedSelector.ts';


export const ProductItem: FC<IProductItem> = ({ product }) => {
  const { addItem, deleteProduct } = useActions();
  const { cart } = useTypedSelector((state: RootState) => state);

  const isExistInCart = cart.some(p => p.id === product.id);

  const addHandler = () => {
    addItem(product);
  };
  const handleDeleteProduct = () => {
    deleteProduct(product.id);
  };
  return (
    <>
      <Grid item key={product.id} xs={12} sm={6} md={4}>
        <Card style={{ padding: '16px', textAlign: 'center' }} elevation={3}>
          <CardMedia
            component="img"
            height="140"
            alt="acer"
            image={product.image}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>  {product.name}</Typography>
            <Typography> Цена: {product.price}руб. </Typography>
            <Typography variant="body2">В наличии: {product.quantity} шт.</Typography>
          </CardContent>
          <CardActions>
            <ButtonBlock>
              <ButtonCard size="small" color="primary">
                Редактировать
              </ButtonCard>
              <ButtonCard onClick={handleDeleteProduct} size="small" color="primary">
                Удалить
              </ButtonCard>
              <ButtonCard
                size="small"
                color="primary"
                onClick={addHandler}
              >
                {isExistInCart ? 'Уже в корзине' : 'Добавить в корзину'}
              </ButtonCard>
            </ButtonBlock>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
