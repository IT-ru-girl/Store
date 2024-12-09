import React from 'react';
import {GridMain, ItemText, MainItem} from "./About.styles";
import {Paper, Typography} from "@mui/material";
import {ParagraphTypography} from "../article/Article.styles";


export const  About=()=> {
    return (
        <MainItem elevation='0' rounded>
            <Typography variant="h6">
                About
            </Typography>
            <ItemText
                variant="body1">
                Etiam porta sem malesua
            </ItemText>
        </MainItem>
    )
}

export default About;
