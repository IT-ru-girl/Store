import {styled} from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import {Grid2, Paper, Typography} from "@mui/material";

export const GridMainText = styled(Grid2)(({theme}) => ({
    padding: '20px',
    flexBasis: '33.3333',
    boxSizing: 'border-box',


}));
export const MainItem = styled(Paper)(({theme}) => ({
    backgroundColor: 'rgb(238, 238, 238)',
    padding: '16px'
}));


export const ItemText = styled(Typography)(({theme}) => ({
    flexWrap: 'wrap',
    boxSizing: 'border-box',

}));
