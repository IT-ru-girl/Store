import {AppBar, Button, Container, Paper, Stepper} from '@mui/material';

import {styled} from "@mui/material/styles";
// Стили для AppBar
export const StyledAppBar = styled(AppBar)({
    position: 'absolute',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

// Стили для StepIcon
export const StyledStepIcon = styled('svg')({
    width: 24,
    height: 24,
    '& circle': {
        fill: '#1976d2', // Основной цвет иконки
    },
    '& text': {
        fill: '#fff', // Цвет текста внутри круга
        fontSize: '12px',
    },
});

// Стили для кнопки
export const StyledButton = styled(Button)({
    backgroundColor: '#1976d2', // Основной цвет кнопки
    color: '#fff', // Цвет текста
    '&:hover': {
        backgroundColor: '#115293', // Цвет кнопки при наведении
    },
    marginTop: '24px',
    marginLeft: '8px'
});
export const ContainerMain = styled('main')({
    width: '600px',
    margin: '115px auto',

    boxSizing: 'border-box'
});
export const CheckoutItem = styled(Paper)({
    padding: '24px'
});
export const CheckoutStepper = styled(Stepper)({
    padding: '24px 0px 40px 0px'

});
export const StyledButtonBack = styled(Button)(()=>({
    backgroundColor: '#FFF',
    marginTop: '24px',
   border: '1px solid black'

}))
