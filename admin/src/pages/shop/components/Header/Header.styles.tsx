import AppBar from "@mui/material/AppBar";
import {styled} from "@mui/material/styles";
import {Button,  TextField, Typography} from "@mui/material";


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
