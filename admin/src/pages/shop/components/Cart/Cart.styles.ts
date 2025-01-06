import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


export const CartBox = styled(Box)((theme) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  backgroundColor: '#FFFF', // Использование темы
  borderRadius: '12px', // Добавляем скругленные углы
  padding: '24px', // Внутренний отступ
  border: `1px solid black`, //
}));
