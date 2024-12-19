import { Button, CardActions, CardMedia, Grid, List, ListItem, ListItemText, Modal, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ICartItem, IProduct } from '../../type/Types';
import Box from '@mui/material/Box';
import { cartItems } from '../../Shop';
import { useState } from 'react';
import {  useSelector } from 'react-redux';
import { RootState } from '../../../../app/store.ts';

import { useActions } from '../hooks/useActions.ts';


export const Cart = () => {
  const {removeItem,clearCart}= useActions()
  const {cart} = useSelector((state: RootState) => state);
  const [open, setOpen] = useState(false);



  const handleRemove = (id: string) => {
    removeItem(id);
  };

  const handleClearCart = () => {
   clearCart();
  };

  const showHandler = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={showHandler}>
        Корзина
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4
          }}
        >
          <Typography variant="h6" gutterBottom>
            Корзина
          </Typography>
          <List>
            {cart.map(item => (
              <ListItem key={item.id} divider>
                <ListItemText
                  primary={`${item.name} x${item.quantity}`}
                  secondary={`Цена: ${item.price * item.quantity} руб.`}
                />
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
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClearCart}
              fullWidth
            >
              Очистить корзину
            </Button>
          ) : (
            <Typography color="textSecondary" align="center">
              Корзина пуста
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
};
