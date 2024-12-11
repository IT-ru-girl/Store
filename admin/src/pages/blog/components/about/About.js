
import { ItemText, MainItem} from "./About.styles";
import {Typography} from "@mui/material";



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


