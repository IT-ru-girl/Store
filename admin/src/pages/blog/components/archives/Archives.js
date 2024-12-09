import {Box, Typography, Link} from "@mui/material"
import {MainLink} from "./Archives.styles";

export const Archives=()=> {
    const archives = [
        'March 2020',
        'February 2020',
        'January 2020',
        'November 1999',
        'October 1999',
        'September 1999',
        'August 1999',
        'July 1999',
        'June 1999',
        'May 1999',
        'April 1999',
    ]

    return (
        <div>
            <Typography
                variant="h6"
                gutterBottom
                marginTop={3}
            >
                Archives
            </Typography>
            {archives.map((archive, index) => (
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


