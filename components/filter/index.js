import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Searcher from './searcher'
import Checkgroup from './checkgroup'

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            marginTop: 0,
            width: theme.spacing(33),
            height: theme.spacing(50),
            padding: theme.spacing(1),
        },           
    },
}))
export default function () {
    const classes = useStyles()
    return <div className={classes.root}>
                <Paper variant="outlined">
                    <Typography
                        variant="subtitle2"
                        component="strong">
                            Filtrado Actual 
                    </Typography>
                    <hr />
                    <Searcher />
                    <Checkgroup />
                    <hr />
                </Paper>
            </div>
}