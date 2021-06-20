import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    search_wrap: {
        width: '50%',
        position: 'absolute',
        top: '10%',
        left: '25%'
    },
    search_base: {
        width: '100%',
        position: 'relative',
        display: 'flex'
    },
    search_help: {
        position: 'relative',
        left: '27%',
        fontSize: 30
    },
    search: {
        width: '100%',
        border: '3px solid #3f51b5',
        padding: 5,
        height: 60,
        borderRadius: '25px 25px 25px 25px',
        outline: 50,
        fontSize: 28,
        paddingLeft: 30,
        color: '#503656'
    },
    base: {
        position: 'absolute',
        top: '33%',
        paddingLeft: '5%',
        paddingRight: '5%'
    }
}))