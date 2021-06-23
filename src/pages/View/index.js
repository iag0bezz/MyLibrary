import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import * as ContentActions from '../../store/reducers/content/actions'

import { contents } from '../../store/data'

import { useStyles } from './styles'

import {
    NavBar
} from '../../components'

import {
    Container,
    Box,
    Grid,
    Card,
    CardMedia,
    FormControlLabel,
    Checkbox
} from '@material-ui/core'

import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import {
    Rating
} from '@material-ui/lab'

export default function View(props) {
    const { match } = props
    const classes = useStyles()
    const dispatch = useDispatch()

    const [content, setContent] = useState({})

    const [favorite, setFavorite] = useState(false)
    const [rating, setRating] = useState(0)

    useEffect(() => {
        const { contentId } = match.params

        const content = contents.filter(c => String(c.id) === contentId && c.deleted === false)

        if(content.length <= 0) {
            props.history.push('/')
        } else {
            setContent(content[0])

            setFavorite(content[0].favorite)
            setRating(content[0].rating)
        }
    }, [])

    function hasSomeChange() {
        if(favorite !== content.favorite || rating !== content.rating) {
            return true
        }
        return false
    }

    const Change = () => {
        if(hasSomeChange()) {
            return (
                <div className={classes.save_base}>
                    <button onClick={() => handleButton()} className={classes.save}>SALVAR ALTERAÇÕES</button>
                </div>
            )
        }

        return <></>
    }

    const handleButton = () => {
        const data = {
            id: content.id,
            title: content.title,
            synopsis: content.synopsis,
            categories: content.categories,
            image_url: content.image_url,
            deleted: content.deleted,
            favorite: favorite,
            rating: rating
        }

        dispatch(ContentActions.updateContent(data, content.id))

        setContent(data)
    }

    return (
        <>
            <NavBar />

            <Container container maxWidth='lg'>
                <Box>
                    <Card className={classes.root}>
                        <Grid container spacing={2}>
                            <Grid item sm={4} xs={12}>
                                <div className={classes.image_base}>
                                    <CardMedia className={classes.image} image={content.image_url}>
                                        <FormControlLabel
                                            className={classes.favorite}
                                            control={
                                                <Checkbox 
                                                    checked={favorite}
                                                    icon={<FavoriteBorder />} 
                                                    checkedIcon={<Favorite />}
                                                    onChange={(event) => {
                                                        setFavorite(event.target.checked)
                                                    }}
                                                />
                                            }
                                        />
                                    </CardMedia>
                                    <div className={classes.separator}>Review</div>
                                    <div className={classes.review}>
                                        <Rating name="rating" className={classes.rating} size='large' value={rating} precision={0.5} onChange={(event, value) => setRating(value)} />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item sm={8} xs={12}>
                                <div className={classes.content_base}>
                                    <div className={classes.title_base}>
                                        <h1 className={classes.title}>{content.title}</h1>
                                    </div>
                                    <div className={classes.separator}>Sinopse</div>
                                    <p className={classes.synopsis}>{content.synopsis}</p>
                                    
                                    <Change />
                                </div>
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
            </Container>
        </>
    )
}