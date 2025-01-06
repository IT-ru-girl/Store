import Card from '@mui/material/Card';
import { Button, CardActions, CardMedia, Grid, TextField, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { ButtonBlock, ButtonCard } from '../Header/Header.styles.tsx';
import { IProduct, IProductItem } from '../../Types.tsx';
import { AppDispatch, RootState } from '../../../../app/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../../features/cart/cartSlice.tsx';
import { deleteProduct, updateProduct } from '../../../../features/cart/productSlice.tsx';
import { clearProduct } from '../../../../features/cart/newProductSlice.tsx';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';



export const ProductItem = ({ product }:IProductItem) => {
  const new_product = useSelector((state: RootState) => state.new_product);
  const dispatch= useDispatch<AppDispatch>()
  const  cart= useSelector((state: RootState) => state.cart);
  const [isEditOpen, setEditOpen] = useState(false);
  const [editProduct, setEditProduct] = useState<IProduct>(product);
  const isExistInCart = cart.some(p => p.id === product.id);
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addItem({ ...product, quantity }));
    }
  };

  const handleEditOpen = () => {
    setEditProduct(product);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleSaveEdit = () => {
    dispatch(updateProduct(editProduct));
    handleEditClose();
  };
  const addHandler = () => {
    dispatch(addItem(product));
  };
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product.id));
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
            <TextField
              type="number"
              label="Количество"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              style={{ marginTop: '10px', width: '100px' }}
            />
          </CardContent>
          <CardActions>
            <ButtonBlock>
              <ButtonCard onClick={handleEditOpen} size="small" variant="contained" color="primary">
                Редактировать
              </ButtonCard>
              <ButtonCard onClick={handleDeleteProduct} variant="contained" size="small" color="secondary">
                Удалить
              </ButtonCard>
              <ButtonCard
                size="small"
                color="primary"
                variant="contained"
                onClick={addHandler}
              >
                {isExistInCart ? 'Уже в корзине' : 'Добавить в корзину'}
              </ButtonCard>
            </ButtonBlock>
          </CardActions>
        </Card>
        <Dialog open={isEditOpen} onClose={handleEditClose}>
          <DialogTitle>Редактировать товар</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              margin="dense"
              label="Название"
              value={editProduct.name}
              onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
            />
            <TextField
              fullWidth
              margin="dense"
              label="Цена"
              type="number"
              value={editProduct.price}
              onChange={(e) => setEditProduct({ ...editProduct, price: Number(e.target.value) })}
            />
            <TextField
              fullWidth
              margin="dense"
              label="Количество"
              type="number"
              value={editProduct.quantity}
              onChange={(e) => setEditProduct({ ...editProduct, quantity: Number(e.target.value) })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditClose} color="secondary">
              Отмена
            </Button>
            <Button onClick={handleSaveEdit} color="primary">
              Сохранить
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>




      </>
  );
};
