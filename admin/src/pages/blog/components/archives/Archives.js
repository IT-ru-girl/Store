import { Typography} from "@mui/material"
import {MainLink} from "./Archives.styles";
import {ARCHIVES} from "./Archives.const";

export const Archives=()=> {
    return (
        <div>
            <Typography
                variant="h6"
                gutterBottom
                marginTop={3}
            >
                Archives
            </Typography>
            {ARCHIVES.map((archive, index) => (
                <Typography variant='body1' color='primary'>
                    <MainLink
                        underlineHover
                        key={index}
                    >
                        {archive}
                    </MainLink>
                </Typography>
            ))}
        </div>
    )
}


