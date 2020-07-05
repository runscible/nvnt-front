import { Card,
         CardContent,
         CardActions,
         Button,
         Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import CommonContext from '../../components/commonContext'
import * as moment from 'moment'

import Carroussell from './carrousell'

const useStyles = makeStyles({
 root: {
     minWidth: 700,
     maxWidth: 1000,
     minHeight: 200,
     maxHeight: 300,
     padding: 0,
     marginBottom: 10
    },
    content: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: 0,
        '&:last-child': {
            paddingBottom: 10,
        },
    },
    actionsContainer: {
        borderLeft: 'solid #888999 1px',  
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0,
  },
  title: {
      color: '#2f7dfa',
      fontWeight: 600
  }, 
  contentInfo: {
      paddingTop: 30,
      paddingBottom: 30,
  },
  actions: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: 0,
      paddingRight: 0,
  },
    carroussell: {
        width: 900,
    }
})

export default ({card}) => {
 const classes = useStyles()
 const publish_date = moment(Date.now()).diff(moment(card.publish_date, "DD/MM/YYYY").format('MM-DD-YYYY'), 'days')
 return (
     <Card className={classes.root}>
            <CardContent className={classes.content}>
                <div className={classes.carroussell}>
                 <Carroussell data={{
                     pictures: [card.posting_picture],
                     posting_prices: card.posting_prices
                 }}/>
                </div>   
                <div className={classes.actionsContainer}>
                        <Typography
                            className={classes.title}
                            variant='body2'>
                        {card.title }
                        </Typography >
                        <Typography
                            variant='subtitle2'>
                        {`${card.posting_location.address}, ${card.posting_location.zone}` }    
                        </Typography>
                        <Typography 
                            className={classes.contentInfo}
                            variant='body2'
                            component='p'>
                            { card.posting_description }
                        </Typography>
                    <CardActions className={classes.actions}>
                        {
                         card.publish_date && <Typography
                                                variant='subtitle2'>
                            {
                                publish_date > 1 &&  `publicado hace  ${publish_date} dias` || 
                                publish_date === 1 && `publicado hace ${publish_date} dia` ||
                                publish_date === 0  && `publicado hoy`
                            } 
                                            </Typography>
                        }
                        <Button variant='contained' size='small' color='primary'>
                            Contactar
                        </Button>
                    </CardActions>
                </div> 
            </CardContent>
        </Card>
   )   
}