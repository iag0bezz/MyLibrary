import React from 'react'

import { useDispatch } from 'react-redux'
import * as ContentActions from '../../store/reducers/content/actions'

import {
    NavBar
} from '../../components'

import MuiAlert from '@material-ui/lab/Alert'

import {
    Container,
    Grid,
    Box,
    TextField,
    Card,
    CardMedia,
    FormControlLabel,
    Checkbox,
    Snackbar,
    Button,
    Chip
} from '@material-ui/core'

import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import { Rating } from '@material-ui/lab'

import { useStyles } from './styles'

export default function Create(props) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [image, setImage] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [synopsis, setSynopsis] = React.useState('')
    const [favorite, setFavorite] = React.useState(false)
    const [rating, setRating] = React.useState(5.0)
    const [category, setCategory] = React.useState([])

    const [open, setOpen] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [message, setMessage] = React.useState('')

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />
    }

    const handleClose = (event, value) => {
        if(value !== 'clickaway') {
            setOpen(false)
            setMessage('')
            setError(false)
        }
    }

    const handleDeleteChip = (value) => {
        setCategory((a) => a.filter((v) => v !== value))
    }

    const handleButton = () => {
        var message = '';
        if(title.length <= 0) {
            message = 'Você precisa fornecer um título válido.'
        } else if(image.length <= 0) {
            message = 'Você precisa fornecer uma imagem válida.'
        }else if(synopsis.length <= 0) {
            message = 'Você precisa fornecer uma sinopse válida.'
        } else if(category.length <= 0) {
            message = 'Você precisa colocar pelo menos uma categoria.'
        }

        if(message.length > 0) {
            setMessage(message)
            setOpen(true)
            setError(true)
        } else {
            const content = {
                id: new Date().getTime(),
                title: title,
                synopsis: synopsis,
                categories: category,
                image_url: image,
                deleted: false,
                favorite: favorite,
                rating: rating
            }

            dispatch(ContentActions.addContent(content))

            setMessage('Conteúdo criado com sucesso, redirecionando para página inicial.')
            setOpen(true)
        
            setTimeout(() => { props.history.push('/') }, 3000)
        }
    }

    return (
        <>
            <NavBar />

            <Container container maxWidth='xl' className={classes.base}>
                <Grid>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item sm={4} sx={12}>
                                <Card className={classes.card_base}>
                                    <CardMedia 
                                        className={classes.card_media}
                                        image={image}
                                        title={title}
                                    />
                                    <div className={classes.card_row}>
                                        <h3 className={classes.card_rating_text}>Sua avaliação</h3>
                                        <Rating 
                                            className={classes.card_rating}
                                            name="half-rating" 
                                            value={rating} 
                                            onChange={(event, value) => {
                                                setRating(value)
                                            }}
                                            precision={0.5} 
                                            size='large'
                                        />
                                        <FormControlLabel
                                            className={classes.card_favorite}
                                            control={
                                                <Checkbox 
                                                    icon={<FavoriteBorder />} 
                                                    checkedIcon={<Favorite />}
                                                    value={favorite}
                                                    onChange={(event) => {
                                                        setFavorite(event.target.checked)
                                                    }}
                                                />
                                            }
                                        />
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item sm={8} sx={6}>
                                <Card className={classes.form_base}>
                                    <TextField
                                        id="title"
                                        value={title}
                                        placeholder="Insira o título aqui"
                                        onChange={(event) => {
                                            setTitle(event.target.value)
                                        }}
                                        helperText="Informe o título do conteúdo"
                                        variant="outlined"
                                        className={classes.form_input}
                                    />
                                    <TextField
                                        id="image"
                                        value={image}
                                        placeholder="Insira o url da imagem aqui"
                                        onChange={(event) => {
                                            setImage(event.target.value)
                                        }}
                                        helperText="Informe a imagem do conteúdo"
                                        variant="outlined"
                                        className={classes.form_input}
                                    />
                                    <TextField
                                        id="synopsis"
                                        multiline
                                        placeholder="Insira a sinopse do seu conteúdo aqui"
                                        value={synopsis}
                                        onChange={(event) => {
                                            setSynopsis(event.target.value)
                                        }}
                                        helperText="Informe a sinopse do conteúdo"
                                        variant="outlined"
                                        className={classes.form_input}
                                    />
                                    <TextField
                                        id="categories"
                                        placeholder="Insira as categorias do seu conteúdo aqui"
                                        helperText="Informe as categorias do conteúdo. Observação: Após escrever o nome da categoria aperte ENTER para confirmar."
                                        variant="outlined"
                                        onKeyPress={(event) => {
                                            if(event.key === 'Enter' && event.target.value.length > 0) {
                                                setCategory([event.target.value, ...category])
                                                event.target.value = ''
                                            }
                                        }}
                                        className={classes.form_input}
                                    />
                                    <div className={classes.chip_row}>
                                        {category.map(c => {
                                            return (
                                                <li key={c}>
                                                    <Chip className={classes.chip} label={c} variant="outlined" color="primary" onDelete={() => handleDeleteChip(c)} />
                                                </li>
                                            )
                                        })}
                                    </div>
                                    <Button onClick={() => handleButton()} variant="contained" color="primary" disableElevation>
                                        CRIAR
                                    </Button>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Container>

            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={error ? "error" : "success"}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}