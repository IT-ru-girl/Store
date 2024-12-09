import {GridMainText} from "./components/about/About.styles";
import React from "react";
import About from "./components/about/About";

import {SocialLink} from "./components/socialLinks/SocialLinks";
import {Archives} from "./components/archives/Archives";

export const Item = () => {
    return (
        <GridMainText item xs={12} md={4}>
            <About/>
            <Archives/>
            <SocialLink/>
        </GridMainText>
    )
}




