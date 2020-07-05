import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '../components/card'
import Filter from '../components/filter'

import CommonContext from '../components/commonContext'
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row'
    }, 
    filter: {
        display: 'flex',
        flexDirection: 'column'
    },
    cards: {
        display: 'flex',
        flexDirection: 'column',    
    }
})

export default function () {
    const { state } = useContext(CommonContext) 
    const classes = useStyles()
    return <div className={classes.root}>
                <Filter className={classes.filter} />
                <div className={classes.cards}>
                    { state.results && state.results.data.map((val, index) => <Card key={ index } card={val}/> ) }
                </div>
            </div>
}       