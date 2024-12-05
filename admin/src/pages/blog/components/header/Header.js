import React from 'react'
import {
    Button,
    Link,
    Typography
} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import {Search} from "@mui/icons-material";
import {SvgIcon} from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";

import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import {
    ContinueReadingLink,
    DenseToolbar,
    FeaturedContent,
    FeaturedPost,
    FeaturedTitle,
    RootToolbar
} from "./Header.styles";


function Header() {
    const links = [
        'Technology', 'Design', 'Culture', 'Business', 'Politics', 'Opinion',
        'Science', 'Health', 'Style', 'Travel'
    ];
    return (
        <>
            <RootToolbar>
                <Button color="inherit" size="small">
                    SUBSCRIBE
                </Button>
                <Typography align="center" variant="h5" noWrap color="inherit">
                    Blog
                </Typography>
                <div>
                    <IconButton>
                        <SvgIcon>
                            <Search/>
                        </SvgIcon>
                    </IconButton>
                    <Button color="inherit" variant="outlined" size="small">
                        Sign up
                    </Button>
                </div>
            </RootToolbar>
            <DenseToolbar variant="dense">
                {links.map((link, index) => (
                    <Link href="" color="inherit" key={index} underline="hover">
                        {link}
                    </Link>
                ))}
            </DenseToolbar>
            <FeaturedPost elevation={1}>
                <FeaturedContent>
                    <Typography variant="h3" gutterBottom>
                        Title of a longer featured blog post
                    </Typography>
                    <FeaturedTitle variant="h5" color="inherit">
                        Multiple lines of text that form the lede, informing new readers quickly and efficiently about
                        what's most interesting in this post's contents.
                    </FeaturedTitle>
                    <Typography variant="subtitle1">
                        <ContinueReadingLink underline="hover">
                            Continue reading…
                        </ContinueReadingLink>
                    </Typography>
                </FeaturedContent>
            </FeaturedPost>

        </>
//         <ThemeProvider theme={theme}>
//             <CssBaseline />
//     <Toolbar
//         variant="regular"
//         sx={{
//         display: 'flex',
//         justifyContent: 'space-between',
//             borderBottom: '1px solid rgba(0, 0, 0, 0.12);',
//         }}>
// <Button // не того цвета слова что на макете там более жирные
//     color='inherit'
//     root size="small"
//     text label='node'>
//     SUBSCRIBE
// </Button>
//       <Typography
//           align="center"
//           variant="h5"
//           noWrap
//           color={'inherit'}
//           sx={{
//           display: 'flex',
//            }}>
//           Blog
//       </Typography>
//         <div>
//             <IconButton>
//                 <SvgIcon   // это правильно?
//                     >
//                     <Search/>
//                 </SvgIcon>
//             </IconButton>
//             <Button
//                 color='inherit'
//                 variant="outlined"
//                 size="small">
//                 Sign up
//             </Button>
//         </div>
//     </Toolbar>
//     <Toolbar sx={{
//         display: 'flex',
//         justifyContent: 'space-between'
//     }} noWrap variant='dense'>
//         {links.map((link, index)=>
//         <Link href='' color='inherit' key ='index' underline='hover'>{link}</Link>) }
//     </Toolbar>
// <Paper rounded elevation='1'
//     sx={{
//         background:'#424242',
//         marginBottom: '32px',
//     }}
//     //  правильно ли стили?
// >
//     <Grid  root container>
//         <Grid2  md='6' sx={{
//             boxSizing: 'border-box',
//             padding: '40px',
//             flexGrow: '0',
//             maxWidth: '50%',
//             flexBasis: '50%',
//             color: '#fff',
//             backgroundSize: 'cover',
//         }} item >
//             <Typography variant="h3"
//                         gutterBottom
//             >
//                 Title of a longer featured blog post
//             </Typography>
//             <Typography  sx={{
//                 marginBottom: '16px',
//             }} variant='h5' color='inherit'>
//                 Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
//             </Typography>
//             <Typography
//
//                 variant='subtitle1' >
//                 <Link  sx={{
//                     color:'#1976d2' ,
//                 }} underlineHover>
//                     Continue reading…
//                 </Link>
//             </Typography>
//
//         </Grid2>
//     </Grid>
// </Paper>
//
//         </ThemeProvider>
    );
}

export default Header;
