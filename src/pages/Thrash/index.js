import React, { useEffect } from 'react'

import { contents } from '../../store/data'

import { useStyles } from './styles.js'

import { useDispatch } from 'react-redux'
import * as ContentActions from '../../store/reducers/content/actions'

import {
    NavBar,
    Content
} from '../../components'

import {
    Container,
    Box,
    Grid,
    CardMedia
} from '@material-ui/core'

export default function Thrash(props) {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        if(all().length <= 0) {
            props.history.push('/')
        }
    }, [])

    const all = () => {
        return contents.filter(content => content.deleted === true)
    }

    function handleRecovery(content) {
        const data = {
            id: content.id,
            title: content.title,
            synopsis: content.synopsis,
            categories: content.categories,
            image_url: content.image_url,
            deleted: false,
            favorite: content.favorite,
            rating: content.rating
        }

        dispatch(ContentActions.updateContent(data, content.id))
    }

    return (
        <>
            <NavBar />
            
            <Container container maxWidth='md' className={classes.base}>
                <Grid>
                    <Box>
                        <h1>Todos os conteúdos deletados</h1>
                        <Grid container spacing={6}>
                            {all().map(content => {
                                return (
                                    <Grid key={content.id} item sm={4} xs={6}>
                                        <Content onClick={() => handleRecovery(content)} title={content.title} synopsis={content.synopsis} image_url={content.image_url} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </Grid>
            </Container>
        </>
    )
}