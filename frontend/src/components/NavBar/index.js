import React from 'react'

import {
    AppBar,
    Toolbar,
    Button,
} from '@material-ui/core'

import {
    Home,
    Create
} from '@material-ui/icons'

import { useStyles } from './styles'

export default function NavBar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="relative">
                <Toolbar variant='dense'>
                    <Button href='/' color="inherit" className={classes.button}>
                        <Home className={classes.icon} />
                        INICIO
                    </Button>
                    <Button href='/create' color="inherit" className={classes.button}>
                        <Create className={classes.icon} />
                        CRIAR
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}