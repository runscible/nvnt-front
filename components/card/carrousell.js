import { CarouselProvider,
         Slider,
         Slide,
         ButtonBack,
         ButtonNext,
         Image } from 'pure-react-carousel'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const mockImages = [
    "https://preprostatic.zonapropcdn.com/avisos/1/00/44/55/79/81/360x266/1693121343.jpg",
    "https://preprostatic.zonapropcdn.com/avisos/1/00/44/55/41/44/360x266/1693069558.jpg",
    "https://preprostatic.zonapropcdn.com/avisos/1/00/44/18/69/48/360x266/1688441607.jpg"
]

const useStyles = makeStyles({
    img: {
        height: 150,
    }, 
    containerSlide: {
        position: 'relative',
        maxWidth: 600,
        margin: 'auto'
    },
    buttonLeft: {
        borderRadius: 15,
        position: 'absolute',
        top: '50%',
        left: 0,
        backgroundColor: 'transparent',
        border: 'none',
    },
    buttonRight: {
        borderRadius: 15,
        position: 'absolute',
        top: '50%',
        right: 0,
        backgroundColor: 'transparent',
        border: 'none',
    },
    slider: {
        display: 'flex',
        flexDirection: 'row'
    },
    iconButton: {
        color: '#fff',
     },
    ContainerPrice: {
        paddingBottom: 0,
        paddingLeft: 10
    }
})

export default () => {
        const classes = useStyles()
        return <CarouselProvider
            naturalSlideWidth={10}
            naturalSlideHeight={5}
            totalSlides={mockImages.length}>
                <div className={classes.containerSlide}>
                    <Slider>
                    {
                        mockImages.map((val, index) => 
                        <Slide 
                            key={index}
                            index={index}>
                            <Image 
                                className={classes.img}
                                src={val} />
                        </Slide>
                            )
                    }
                    </Slider>
                    <ButtonBack className={classes.buttonLeft}>
                        <ArrowBack className={classes.iconButton} />
                    </ButtonBack>
                    <ButtonNext className={classes.buttonRight}>
                        <ArrowForward className={classes.iconButton} />
                    </ButtonNext>
                </div>
                <div className={classes.ContainerPrice}>
                    <Typography >
                        Las golondrina
                    </Typography>
                    <Typography >
                        Las golondrina se los arcos.
                    </Typography>
                </div>    
            </CarouselProvider>
    }
