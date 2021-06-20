import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    button: {
        padding: theme.spacing(2)
    },
    icon: {
        padding: 10,
    }
}))