import React from 'react'

import {
    Card,
    CardActionArea,
    CardMedia
} from '@material-ui/core'

import { useStyles } from './styles'

export default function Content(props) {
    const classes = useStyles()

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea {...props}>
                    <CardMedia 
                        className={classes.media}
                        image={props.image_url}
                        title={props.title}
                    />
                </CardActionArea>
            </Card>
        </>
    )
}