/* eslint-disable array-callback-return */
import React from 'react'

import { Link } from 'react-router-dom'

import { contents } from '../../store/data'

import { NavBar, Content } from '../../components'

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

    const [search, setSearch] = React.useState('')

    const handleSearch = (event) => {
        setSearch(event.target.value)
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
                {contentsByFavorite().length > 0 ? <h1>Favoritos</h1> : undefined}
                <Grid container spacing={6}>
                    {contentsByFavorite().map(content =>
                        <Grid key={content.id} item sm={4} xs={6}>
                            <Link to={`/content/${content.id}`}>
                                <Content 
                                    key={content.id}
                                    title={content.title}
                                    synopsis={content.synopsis}
                                    image_url={content.image_url}
                                />
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