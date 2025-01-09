import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';


export const CartBox = styled(Box)(({theme}) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  backgroundColor: theme.palette.common.white, // Использование темы
  borderRadius: '12px', // Добавляем скругленные углы
  padding: '24px', // Внутренний отступ
  border: `1px solid black`, //
}));
export const CartTextField = styled(TextField)(({theme}) => ({
  width: '60px',
  marginRight: '10px'
}));
export const CartBoxTotal = styled(Box)(({theme}) => ({
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 'bold',
}));
