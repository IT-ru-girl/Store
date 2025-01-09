import  { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Button, Modal, TextField, Grid, Card, CardContent, Typography, CardActions } from '@mui/material';
import { addProduct, clearProduct } from '../../../../features/cart/newProductSlice.tsx';
import { CartBox } from '../Cart/Cart.styles.ts';
import { INewProduct } from '../../Types.tsx';
import {  useAppDispatch, useAppSelector } from '../../../../app/store.ts';



const ProductAddModal = () => {
  const dispatch = useAppDispatch();
  const newProducts = useAppSelector((state) => state.new_product.items); // Список всех товаров
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [quantity, setQuantity] = useState<number | ''>('');


  const handleSave = () => {
    if (name && price && quantity) {
      const newProduct = {
        id: nanoid(),
        name,
        price: Number(price),
        quantity: Number(quantity),
      };
      dispatch(addProduct(newProduct));
      setOpen(false);
      clearFields();
    }
  };


  const toggleModal = () => {
    setOpen(!open);
    clearFields();
  };


  const clearFields = () => {
    setName('');
    setPrice('');
    setQuantity('');
  };


  const handleClear = () => {
    dispatch(clearProduct());
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Добавить товар
      </Button>


      <Modal open={open} onClose={toggleModal}>
        <CartBox>
          <Typography variant="h6" gutterBottom>
            Добавление товара
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Название товара"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Цена"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Количество"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <div style={{ marginTop: 16, textAlign: 'right' }}>
            <Button onClick={handleSave} variant="contained" color="primary">
              Сохранить
            </Button>
          </div>
        </CartBox>
      </Modal>


      <Grid container spacing={2} style={{ marginTop: 20 }}>
        {newProducts.map((product:INewProduct) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card style={{ padding: '16px', textAlign: 'center' }} elevation={3}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {product.name}
                </Typography>
                <Typography>Цена: {product.price} руб.</Typography>
                <Typography variant="body2">В наличии: {product.quantity} шт.</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={handleClear} size="small" color="secondary" variant="contained">
                  Удалить
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductAddModal;
