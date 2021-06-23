import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: 550,
        marginTop: 20
    },
    image_base: {
        marginTop: 15,
        marginLeft: 15,
    },
    image: {
        width: '100%',
        minHeight: 450,
        maxHeight: 600,

        boxShadow: '0px 0px 24px gray',
    },
    favorite: {
        marginLeft: 3
    },
    separator: {
        fontSize: 14,
        color: '#a8a8b3',
        margin: '16px 0',
        display: 'flex',
        alignItems: 'center',

        "&::before": {
            content: '""',
            flex: 1,
            height: 1,
            background: '#a8a8b3',
            marginRight: 16
        },
        '&:after': {
            content: '""',
            flex: 1,
            height: 1,
            background: '#a8a8b3',
            marginLeft: 16
        }
    },
    review: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content_base: {
        margin: 25
    },
    title_base: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25
    },
    save_base: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    save: {
        marginRight: 5,
        marginTop: 300,
        height: 50,
        width: 250,
        borderRadius: 8,
        fontWeight: 500,
        background: '#4BB543',
        color: '#FFF',
        padding: '0 32px',
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        cursor: 'pointer',
        border: 0,

        transition: 'filter 0.2s',

        '&:hover': {
            filter: 'brightness(0.9)'
        }
    },
    delete: {
        marginTop: 300,
        height: 50,
        width: 150,
        borderRadius: 8,
        fontWeight: 500,
        background: '#ff0033',
        color: '#FFF',
        padding: '0 32px',
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        cursor: 'pointer',
        border: 0,

        transition: 'filter 0.2s',

        '&:hover': {
            filter: 'brightness(0.9)'
        }
    }
}))