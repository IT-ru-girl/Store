import { Button, List, ListItem, ListItemText, Modal, TextField, Typography } from '@mui/material';

import Box from '@mui/material/Box';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../app/store.ts';
import { clearCart, removeItem, updateItemQuantity } from '../../../../features/cart/cartSlice.tsx';
import { CartBox } from './Cart.styles.ts';
import { PRODUCTS } from '../Products.const.tsx';


export const Cart = () => {
  const dispatch= useDispatch<AppDispatch>()

  const cart = useSelector((state: RootState) => state.cart);
  const [open, setOpen] = useState(false);



  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
   dispatch(clearCart());
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateItemQuantity({ id, quantity }));
    }
  };
  const showHandler = () => {
    setOpen(!open);
  };
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div>
      <Button onClick={showHandler}>
        Корзина
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <CartBox
        >
          <Typography variant="h6" gutterBottom>
            Корзина
          </Typography>
          <List>
            {cart.map(item => (
              <ListItem key={item.id} divider>
                <ListItemText
                  primary={`${item.name}` }
                  secondary={`Цена за штуку: ${item.price} руб.`}
                />
                <TextField
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                  style={{ width: '60px', marginRight: '10px' }}
                />
                <Typography style={{ marginRight: '10px' }}>
                  Всего: {item.quantity * item.price} руб.
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleRemove(item.id)}
                >
                  Удалить
                </Button>
              </ListItem>
            ))}
          </List>
          {cart.length > 0 ? (
            <>
              <Box
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: 'bold',
                }}
              >
                <Typography>Общее количество: {totalQuantity}</Typography>
                <Typography>Общая стоимость: {totalCost} руб.</Typography>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClearCart}
                fullWidth
                style={{ marginTop: '20px' }}
              >
                Очистить корзину
              </Button>
            </>
          ) : (
            <Typography color="textSecondary" align="center">
              Корзина пуста
            </Typography>
          )}
        </CartBox>
      </Modal>
    </div>
  );
};
