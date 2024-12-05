import React from 'react';
import {
    Link,
    Paper,
    Toolbar,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';


  export const RootToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
}));

 export const DenseToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));

 export const FeaturedPost = styled(Paper)(({ theme }) => ({
    background: '#424242',
    marginBottom: '32px',
    borderRadius: theme.shape.borderRadius,
}));

 export const FeaturedContent = styled('div')(({ theme }) => ({
    boxSizing: 'border-box',
    padding: '40px',
    flexGrow: 0,
    maxWidth: '50%',
    flexBasis: '50%',
    color: '#fff',
    backgroundSize: 'cover',
}));

 export const FeaturedTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

 export const ContinueReadingLink = styled(Link)(({ theme }) => ({
    color: '#1976d2',
}));
