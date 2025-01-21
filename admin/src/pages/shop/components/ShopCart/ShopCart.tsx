import { Button, List, ListItem, ListItemText, Modal,  Typography } from '@mui/material';
import { useState } from 'react';
import { clearCart, removeItem, updateItemQuantity } from '../../../../features/cart/cartSlice.tsx';
import { useAppDispatch, useAppSelector } from '../../../../app/store.ts';
import { CartBox, CartBoxTotal, CartTextField } from '../../../../styles';



export const ShopCart = () => {
  const dispatch= useAppDispatch()

  const cart = useAppSelector((state) => state.cart);
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
    <>
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
                <CartTextField
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
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
              <CartBoxTotal
              >
                <Typography>Общее количество: {totalQuantity}</Typography>
                <Typography>Общая стоимость: {totalCost} руб.</Typography>
              </CartBoxTotal>
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
    </>
  );
};
