import React from 'react';
import {
    Container,


} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'

import Header from "./components/header/Header";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from '@mui/material/Grid2'
import Divider from "@mui/material/Divider";
import {withSocialLink} from "./withSocialLink";
import PostCard from "./components/postcard/PostCard";
import Archives from "./components/archives/Archives";
import Main from "./components/main/Main";
import {Footer} from "./components/footer/Footer";

export const theme = createTheme({
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

function Blog() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Container maxWidth='lg'>
                    <Header/>
                    <PostCard/>
                    <Main/>
                    <Footer/>
                </Container>
            </ThemeProvider>
        </>
    );
}

export default Blog;
