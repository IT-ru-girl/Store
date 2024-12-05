import { styled } from '@mui/material/styles';

import Grid from "@mui/material/Grid2";



export const GridRow = styled(Grid)(({ theme }) => ({
    flexGrow: '0',
    maxWidth: '50%',
    flexBasis: '50%'
}));
