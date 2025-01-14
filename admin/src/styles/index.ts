import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';


export const CartBox = styled(Box)(({theme}) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  backgroundColor: theme.palette.common.white,
  borderRadius: '12px',
  padding: '24px',
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

export const FilterBox = styled(Box)(({theme}) => ({
  padding: '16px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  marginBottom: '20px'
}));
export const HeaderBar = styled(AppBar)(({theme}) => ({
  height: '60px',
  display: 'flex',

}));
export const HeaderTitle = styled(Typography)(({theme}) => ({
  textAlign: 'center',
  paddingTop: '15px'
}));
export const InputSearch = styled(TextField)(({theme}) => ({
  marginTop: '100px'
}));
export const ButtonCard = styled(Button)(({theme}) => ({
  marginBottom: '10px'
}));
export const ButtonBlock = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  margin: '10px'
}));
