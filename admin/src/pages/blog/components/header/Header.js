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


export const  Header=()=> {
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
    );
}


