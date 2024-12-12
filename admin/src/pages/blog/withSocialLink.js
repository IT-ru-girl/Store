import {Typography, Link } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React from 'react'


export const withSocialLink = (IconComponent) => {
    return ({anchor, linked, color}) => (
        <Link href={linked} color={color}>
            <Grid container spacing={1} alignItems="center">
                <Grid>
                    <IconComponent />
                </Grid>
                <Grid>
                    <Typography variant="body1" >
                        {anchor}
                    </Typography>
                </Grid>
            </Grid>
        </Link>
    )
}
