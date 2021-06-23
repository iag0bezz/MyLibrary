import React from 'react'

import { contents } from '../../store/data'

import {
    AppBar,
    Toolbar,
    Button,
} from '@material-ui/core'

import {
    Home,
    Create,
    Delete
} from '@material-ui/icons'

import { useStyles } from './styles'

export default function NavBar() {
    const classes = useStyles()

    function deletedQty() {
        return contents.filter(content => content.deleted === true).length
    }

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
                    <Button href={deletedQty() > 0 ? '/thrash' : ''} color='inherit' className={classes.button}>
                        <Delete className={classes.icon} />
                        LIXEIRA ({deletedQty()})
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}