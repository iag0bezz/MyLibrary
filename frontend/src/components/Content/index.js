import React from 'react'

import {
    Card,
    CardActionArea,
    CardMedia
} from '@material-ui/core'

import { useStyles } from './styles'

export default function Content({ title, synopsis, image_url }) {
    const classes = useStyles()

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia 
                        className={classes.media}
                        image={image_url}
                        title={title}
                    />
                </CardActionArea>
            </Card>
        </>
    )
}