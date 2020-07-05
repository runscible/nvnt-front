import { useContext } from 'react'
import { Card,
         CardContent,
         CardActions,
         Button,
         Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import CommonContext from '../../components/commonContext'
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

export default () => {
 const classes = useStyles()   
 const { state } = useContext(CommonContext) 
 return (
     <Card className={classes.root}>
            <CardContent className={classes.content}>
                <div className={classes.carroussell}>
                    <Carroussell />
                </div>   
                <div className={classes.actionsContainer}>
                        <Typography
                            className={classes.title}
                            variant='body2'>
                            La quemadas grupos árboles perfil.
                        </Typography >
                        <Typography
                            variant='subtitle2'>
                            Término para olvidando el con para.    
                        </Typography>
                        <Typography 
                            className={classes.contentInfo}
                            variant='body2'
                            component='p'>
                            Es tierra ceniza pasan me encuentro húmedo en lenguas cosas. Sus los tierra nunca con que tierra latido aire quedo, quedo la quemadas ansioso de las pisan que tierra transparente. La faraón un y ansioso me me cielo bajo nube. Diminutas que el ligeros de los. Vacía los bajo escaleras.
                        </Typography>
                    <CardActions className={classes.actions}>
                        <Typography
                        variant='subtitle2'>
                            Término para olvidando el con para.
                        </Typography>
                        <Button variant='contained' size='small' color='primary'>
                            Contactar
                        </Button>
                    </CardActions>
                </div> 
            </CardContent>
        </Card>
   )   
}