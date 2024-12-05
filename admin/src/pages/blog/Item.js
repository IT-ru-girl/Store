import {GridMain, GridMainText, MainItem} from "./components/about/About.styles";
import {Typography} from "@mui/material";
import React from "react";
import About from "./components/about/About";
import Archives from "./components/archives/Archives";
import {SocialLink} from "./components/socialLinks/SocialLinks";

function Item() {
    return (
        <GridMainText item xs={12} md={4}>
            <About/>
            <Archives/>
            <SocialLink/>
        </GridMainText>
    )
}

export default Item;


