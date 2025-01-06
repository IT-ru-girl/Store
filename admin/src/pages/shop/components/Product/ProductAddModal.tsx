import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';


import { Button, Modal, TextField, Grid, Card, CardContent, Typography, CardActions } from '@mui/material';

import { addProduct, clearProduct } from '../../../../features/cart/newProductSlice.tsx';
import { CartBox } from '../Cart/Cart.styles.ts';
import { INewProduct, IProduct } from '../../Types.tsx';
import { AppDispatch, RootState } from '../../../../app/store.ts';



const ProductAddModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const new_products = useSelector((state: RootState) => state.new_product.items); // Список всех товаров
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [quantity, setQuantity] = useState<number | ''>('');

  // Обработчик сохранения товара
  const handleSave = () => {
    if (name && price && quantity) {
      const newProduct = {
        id: nanoid(),
        name,
        price: Number(price),
        quantity: Number(quantity),
      };
      dispatch(addProduct(newProduct)); // Добавление товара в Redux
      setOpen(false);
      clearFields(); // Очистка полей после сохранения
    }
  };

  // Открытие/закрытие модального окна
  const toggleModal = () => {
    setOpen(!open);
    clearFields(); // Очистка полей при закрытии модального окна
  };

  // Очистка полей
  const clearFields = () => {
    setName('');
    setPrice('');
    setQuantity('');
  };

  // Удаление товара (в этом примере очищаем весь список)
  const handleClear = () => {
    dispatch(clearProduct());
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Добавить товар
      </Button>

      {/* Модальное окно */}
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

      {/* Список товаров */}
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        {new_products.map((product:INewProduct) => (
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
