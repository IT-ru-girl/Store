import {styled} from "@mui/material/styles";
import {Grid2, Toolbar, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";


export const GridContainer = styled(Grid)(({theme}) => ({
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    // width: 'calc(100% + 40px)',

}));

export const GridMain = styled(Grid2)(({theme}) => ({
    padding: '20px',
    flexBasis: '66.6667%',
}));

export const GlobalTypography = styled('div')(({theme}) => ({
    padding: '24px 0px'
}));

export const TitleTypography = styled(Typography)(({theme}) => ({
    marginBottom: '0.35em'
}));

export const ParagraphTypography = styled(Typography)(({theme}) => ({
    marginBottom: '16px'
}));


