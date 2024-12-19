import {FormControl, InputLabel, TextField} from "@mui/material";
import { InputSearch} from "./header/Header.styles";

export const InputForm=()=>{
    return(
        <>
            <InputSearch id="standard-basic" label="Искать товары...." variant="outlined" />
        </>
    )
}
