import { TextField,
         Button,
         Typography    } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(1)
    },
    searcher: {
        display: 'flex',
        flexDirection: 'row',
        '& input': {
            padding: theme.spacing(1)
        },
        '& button': {
            marginLeft: theme.spacing(1)
        }

    },
    title: {
        paddingBottom: 10,
        fontWeight: 600,
        
    }
}))

export default function() {
    const classes = useStyles()
    return <div className={classes.root}> 
             <Typography
                className={classes.title}                
                variant="subtitle2" >
                 Dirección
             </Typography>
             <div className={classes.searcher}>
                <TextField
                  variant='outlined'
                  fullWidth={ true }
                  type='text'
                  placeholder='buscar por direccion' />
                <Button 
                    size="small" 
                    variant='outlined'>
                    <Search />
                </ Button>    
             </div>    
           </div>
}