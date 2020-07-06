import { useContext } from 'react'
import { Typography,
         Radio  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CommonContext from '../commonContext'
import { SELECT_TYPE } from '../constants'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    }, 
    item : {
        display: 'flex',
        flexDirection: 'row',
        '& p ': {
            fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif'     
        }
    }
}))

export default function() {
    const classes = useStyles()
    const { state, dispatch } = useContext(CommonContext)
    const handleChange = event => {
        const { initialState } = state
        
        event.target.value !== '0' && dispatch({type: SELECT_TYPE, payload: {
           operationType: event.target.value,
           results: initialState.data.filter( val =>
                     val.posting_prices.some(val_filter =>
                         `${val_filter.operation_type}` === event.target.value ) )  
        }})

        event.target.value === '0' && dispatch({ type: SELECT_TYPE, payload: {
            operationType: event.target.value,
            results: initialState.data
        }})
    }
    const { operationType } = state
    return <div className={classes.root}>
               <Typography
                variant="subtitle2"
                component="strong">
                    Tipo de operación 
               </Typography> 
               <div className={classes.item}>
                   <Radio 
                    checked={operationType === '1'}
                    onChange={handleChange}
                    value='1' />
                    <p>
                        Alquilar
                    </p>        
               </div>
               <div className={classes.item}>
                   <Radio 
                    checked={operationType === '2'}
                    onChange={handleChange}
                    value='2' />
                    <p>
                        Comprar
                    </p>    
               </div>
                <div className={classes.item}>
                    <Radio
                    checked={operationType === '3'}
                    onChange={handleChange}
                    value='3' />
                    <p>
                        Temporal
                    </p>
               </div>
                <div className={classes.item}>
                    <Radio
                        checked={operationType === '0'}
                        onChange={handleChange}
                        value='0' />
                    <p>
                        Todos
                    </p>
                </div>
           </div> 
}