import { deleteProduct, updateProduct } from '../../../../../features/cart/productSlice.tsx';
import { addItem } from '../../../../../features/cart/cartSlice.tsx';
import { useAppDispatch, useAppSelector } from '../../../../../app/store.ts';
import { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography, Dialog, DialogTitle,DialogContent,DialogActions } from '@mui/material';
import { IProduct, IProductItem } from '../../../ShopTypes.tsx';
import { ButtonBlock, ButtonCard } from '../../../../../styles';


export const ShopProductItem = ({ product }: IProductItem) => {
  const newProduct = useAppSelector((state) => state.new_product);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

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
