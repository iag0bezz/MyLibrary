import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    base: {
        position: 'absolute',
        top: '15%',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    card_base: {
        boxShadow: '0px 0px 8px gray'
    },
    card_media: {
        height: 500
    },
    card_row: {
        display: 'flex',
        flexDirection: 'row',
    },
    card_rating_text: {
        paddingLeft: 35
    },
    card_rating: {
        padding: 15,
        left: '5%'
    },
    card_favorite: {
        paddingLeft: '5%'
    },
    form_base: {
        backgroundColor: theme.palette.common.white,
        padding: 50
    },
    form_input: {
        width: '100%',
        paddingBottom: 15
    },
    chip_row: {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
        paddingBottom: 15
    },
    chip: {
        margin: theme.spacing(0.5)
    }
}))