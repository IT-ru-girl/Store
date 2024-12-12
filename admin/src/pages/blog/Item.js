import {GridMainText} from "./components/about/About.styles";
import React from "react";


import {SocialLink} from "./components/socialLinks/SocialLinks";
import {Archives} from "./components/archives/Archives";
import {About} from "./components/about/About";

export const Item = () => {
    return (
        <GridMainText item xs={12} md={4}>
            <About/>
            <Archives/>
            <SocialLink/>
        </GridMainText>
    )
}




