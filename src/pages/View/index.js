import React, { useEffect, useState } from 'react'

import { contents } from '../../store/data'

import { useStyles } from './styles'

import {
    NavBar
} from '../../components'

import {
    Container,
    Box,
    Grid
} from '@material-ui/core'

export default function View(props) {
    const { match } = props
    const classes = useStyles()

    const [content, setContent] = useState({})

    useEffect(() => {
        const { contentId } = match.params

        const content = contents.filter(c => String(c.id) === contentId && c.deleted === false)

        if(content.length <= 0) {
            props.history.push('/')
        } else {
            setContent(content[0])
        }
    }, [])

    return (
        <>
            <NavBar />

            <Container>
                <Box>
                    <Grid>
                        {content.title}
                        <hr />
                        {content.synopsis}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}