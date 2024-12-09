import {Button,  CardActionArea, CardContent, Paper, Typography} from '@mui/material'
import Grid from '@mui/material/Grid2'
import React from 'react'
import {GridRow} from "./PostCard.styles";

const cards =[{
    title:'Featured post',
    subtitle: 'Nov 12',
    text:'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link:' Continue reading...'
},
    {
    title:'Post title',
    subtitle: 'Nov 11',
    text:'This is a wider card with supporting text below as a natural lead-in to additional content.',
    link:' Continue reading...'
}
]

export const PostCard = () => {
    return (
        <Grid container spacing='4'>
        {cards.map((card,index)=>
            <GridRow item xs='12' md='6' key='index'>
                <Button >
                    <CardActionArea>
                        <Paper  align="left" rounded elevation='1'
                        // при нажатии голубой цвет
                        >
                        <CardContent >
                                    <Typography variant="h5">
                                        {card.title}
                                    </Typography>
                                    <Typography color='textSecondary' variant='subtitle1'>
                                        {card.subtitle}
                                    </Typography>
                                    <Typography paragraph variant='subtitle1'>
                                        {card.text}
                                    </Typography>
                                    <Typography color='primary' variant='subtitle1'>
                                        {card.link}
                                    </Typography>
                        </CardContent>
                                </Paper>
                    </CardActionArea>
                </Button>
            </GridRow>
        )}
        </Grid>
    )
}

