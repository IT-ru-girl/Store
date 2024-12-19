import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store.ts';
import { Button, Input, Modal } from '@mui/material';
import Box from '@mui/material/Box';
import { useActions } from '../hooks/useActions.ts';
import { useTypedSelector } from '../hooks/useTypedSelector.ts';

const AddProductModal = () => {
  const { toggleModal } = useActions();
  const { isModalOpen } = useTypedSelector((state: RootState) => state.products);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);


  const handleSave = () => {
    if (name && price > 0 && quantity > 0) {
      const newProduct = {
        id: Date.now().toString(), // Генерация уникального ID
        name,
        price,
        quantity
      };
      toggleModal(false);
    } else {
      alert('Пожалуйста, заполните все обязательные поля!');
    }
  };

  const handleClose = () => {
    toggleModal(false); // Закрыть модальное окно

  };
  const handleOpen = () => {
    toggleModal(true); // Закрыть модальное окно
  };
  return (
    <div>
      <Button onClick={handleOpen}>Добавить товар</Button>

      <Modal open={isModalOpen} onClose={handleClose}>
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
          <Input
            type="text"
            placeholder="Название товара"
            value={name}
            onChange={(e) => setName(e.target.value)}

          />

          <Input
            type="number"
            placeholder="Цена"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}

          />
          <Input
            type="number"
            placeholder="Количество"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}

          />
          <div>
            <Button onClick={handleSave}>Сохранить</Button>
            <Button onClick={handleClose}>Закрыть</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};


export default AddProductModal;
