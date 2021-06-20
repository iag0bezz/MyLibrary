/* eslint-disable array-callback-return */
import React from 'react'

import { Link } from 'react-router-dom'

import { contents } from '../../store/data'

import { useDispatch } from 'react-redux'
import { NavBar, Content } from '../../components'

import * as ContentActions from '../../store/reducers/content/actions'

import {
    Container,
    Grid,
    Box
} from '@material-ui/core'

import {
    
} from '@material-ui/icons'

import { useStyles } from './styles'

export default function Home() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [search, setSearch] = React.useState('')

    const handleSearch = (event) => {
        setSearch(event.target.value)

        if(search === 'create') {
            const content = {
                id: new Date().getTime(),
                title: 'Simple Title2',
                synopsis: 'Era uma vez a princesa guerreira',
                categories: ['fantasia', 'misterio', 'ficção'],
                image_url: 'https://i.pinimg.com/564x/02/91/7d/02917dfe49cd1050600a7cd1344267dc.jpg',
                deleted: false,
                favorite: false
            }

            dispatch(ContentActions.addContent(content))
        }
    }

    const contentsByFavorite = () => {
        return contents.filter(content => content.favorite === true && content.deleted === false)
    }
    
    const categories = () => {
        const categories = []

        contents.map(content => {
            content.categories.map(category => {
                if(categories.indexOf(category) === -1) {
                    categories.push(category)
                }
            })
        })

        return categories;
    }

    const contentsByCategory = (category) => {
        return contents.filter(content => content.categories.includes(category) && content.deleted === false)
    }

    const contentsByTitle = (search) => {
        return contents.filter(content => content.title.toLowerCase().startsWith(search.toLowerCase()) && content.deleted === false)
    }

    const GlobalContents = () => {
        return (
            <>
                <Grid container spacing={6}>
                    {contentsByFavorite().map(content =>
                        <Grid key={content.id} item sm={2} xs={4}>
                            <Link to={`/content/${content.id}`}>
                                <h1>{content.title}</h1>
                            </Link>
                        </Grid>
                        )}
                </Grid>

                {categories().map(category => {
                    return (<>
                        <h1>{category}</h1>
                        <Grid container spacing={6}>
                            {contentsByCategory(category).map(content => {
                                return (
                                <Grid item key={content.id} sm={4} xs={6}>
                                    <Link to={`/content/${content.id}`}>
                                        <Content 
                                            key={content.id}
                                            title={content.title}
                                            synopsis={content.synopsis}
                                            image_url={content.image_url}
                                        />
                                    </Link>
                                </Grid>
                                )
                            })}
                        </Grid>
                    </>)
                })}
            </>
        )
    }

    const FilteredContents = () => {
        return (
            <>
                <h1>Pesquisas relacionadas</h1>
                <Grid container spacing={6}>
                    {contentsByTitle(search).map(content => {
                        return (
                            <Grid item key={content.id} sm={4} xs={6}>
                                <Link to={`/content/${content.id}`}>
                                    <Content 
                                        key={content.id}
                                        title={content.title}
                                        synopsis={content.synopsis}
                                        image_url={content.image_url}
                                    />
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            </>
        )
    }

    const Contents = () => {
        if(search === '') {
            return <GlobalContents />
        }
        return <FilteredContents />
    }

    return (
        <>
            <NavBar />
            
            <div className={classes.search_wrap}>
                <h1 className={classes.search_help}>O que você está procurando?</h1>
                <div className={classes.search_base}>
                    <input value={search} onChange={handleSearch} className={classes.search} type='text' placeholder='Filtre suas pesquisas...' />
                </div>
            </div>

            
            <Container container maxWidth='md' className={classes.base}>
                <Grid>
                    <Box>
                        <Contents />
                    </Box>
                </Grid>
            </Container>
            
        </>
    )
}