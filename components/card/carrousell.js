import { CarouselProvider,
         Slider,
         Slide,
         ButtonBack,
         ButtonNext,
         Image } from 'pure-react-carousel'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    img: {
        height: 200,
    }, 
    containerSlide: {
        position: 'relative',
        width: '100%',
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
    },
    price: {
        fontWeight: '600',
        fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 20
    },
    expenses: {

    }
})

export default ({data}) => {
        const classes = useStyles()
        const { pictures, posting_prices } = data    
        return <CarouselProvider
            naturalSlideWidth={10}
            naturalSlideHeight={5}
            totalSlides={pictures.length}>
                <div className={classes.containerSlide}>
                    <Slider>
                    {
                        pictures.map((val, index) => 
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
                    <Typography className={classes.price}>
                    {`${ posting_prices[0].price.currency === 'USD' && 
                         'Usd' || '$'   
                        } ${posting_prices[0].price.amount}` } 
                    </Typography>
                    <Typography className={classes.expenses}>
                        { posting_prices[0].expenses && 
                            `+ ${posting_prices[0].expenses.currency === 'USD' && 
                                'Usd' || '$'
                          } ${posting_prices[0].expenses.amount} expensas` }
                    </Typography>
                </div>    
            </CarouselProvider>
    }
