import { useState } from 'react'
import { Card,
         CardContent,
         CardActions,
         Button,
         Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AccessTimeRounded } from '@material-ui/icons'
import * as moment from 'moment'

import Carroussell from './carrousell'
import Modal from './modal'

const useStyles = makeStyles(theme => ({
 root: {
     width: 1000,
     padding: 0,
     marginBottom: 10,
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
        minWidth: 300,
        height: 200,  
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
  },
  title: {
      color: '#2f7dfa',
      fontWeight: 600
  }, 
  contentInfo: {
      paddingTop: 10,
      paddingBottom: 10,
  },
  actions: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: 0,
      paddingRight: 0,
      '& svg': {
          top: 5,
          position: 'relative', 
          marginRight: 5
      }
  },
    carroussell: {
        width: 1400,
        height: 100,
        padding: 0,
    },
    button: {
        color: '#FFF',
        fontWeight: 600
    }    
}))
const style = {
    superhighlight: {
        borderTop: 'solid #8b6bd1'
    },
    highlight: {
        borderTop: 'solid #58dbbf'
    },
    simple: {
        borderTop: 'none'
    }
}




export default function ({card}) {
 const [ open, setOpen ] = useState(false)   
 const classes = useStyles()
 const publish_date = moment(Date.now()).diff(moment(card.publish_date, "DD/MM/YYYY").format('MM-DD-YYYY'), 'days')
 
 const publicationPlan = plan => {
     switch(plan) {
         case 'SUPERHIGHLIGHTED': 
             return style.superhighlight
         case 'HIGHLIGHTED':
             return style.highlight
         default:
             return style.simple         
     }
 }
 const handleOpen = () => {
    setOpen(true)
 }

 const handleClose = () => {
    setOpen(false)
 }
 

 return (
     <Card style={publicationPlan(card.publication_plan)} 
            className={classes.root} variant="outlined">
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
                            {      
                            card.posting_description.length <= 450 && 
                                card.posting_description ||
                                `${card.posting_description.slice(0, 450)}...`
                            }
                        </Typography>
                    <CardActions className={classes.actions}>
                        {
                         card.publish_date && <Typography
                                                variant='subtitle2'>
                             <AccessTimeRounded fontSize="small"/> 
                            {
                                publish_date > 1 && `publicado hace ${publish_date} dias` || 
                                publish_date === 1 && `publicado hace ${publish_date} dia` ||
                                publish_date === 0  && `publicado hoy`
                            } 
                                              </Typography>
                        }
                        <Button 
                             className={classes.button}   
                             variant='contained'
                             size='small'
                             color='primary'
                             onClick={handleOpen}>
                            Contactar
                        </Button>
                     <Modal isOpen={open} handleClose={handleClose} />
                    </CardActions>
                </div> 
            </CardContent>
        </Card>
   )   
}