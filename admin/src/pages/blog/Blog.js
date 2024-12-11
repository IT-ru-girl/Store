
import {
    Container,
} from '@mui/material';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {Footer} from "./components/footer/Footer";
import {Header} from "./components/header/Header";
import {PostCard} from "./components/postcard/PostCard";
import {Main} from "./components/main/Main";

export const theme = createTheme({
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export const Blog = () => {
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


