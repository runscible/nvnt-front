import { Modal, 
         Typography,
         TextField,
         Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        borderRadius: 9,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        '& input': {
            padding: 10,
        },
        '& .MuiTextField-root': {
            margin: 5,
        }
    },
    email: {
        
    },
    personalInfo: {
        display: 'flex',
        flexDirection: 'row'
    },
    message: {

    }
}))

const modalStyle = {
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
}

export default function ({isOpen, handleClose}) {
    const classes = useStyles()
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Typography>contacta con el anunciante</Typography>
                <TextField
                    className={classes.email}
                    variant="outlined"
                    helperText="Email"
                    required />    
            <div className={classes.personalInfo}>
                <TextField
                  variant="outlined"
                  helperText="Nombre"
                    required />
                <TextField
                   variant="outlined"
                   helperText="Telefono"
                   type='number'
                    required />
            </div>
                <TextField
                variant="outlined"
                helperText="mensaje"
                required />
            <Button
                variant='contained'
                color='primary'>
                    Contactar anunciante
            </Button>
        </div>
    )   
    return <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
}