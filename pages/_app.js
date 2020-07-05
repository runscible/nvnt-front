import { useContext, useReducer }  from 'react'

import 'pure-react-carousel/dist/react-carousel.es.css'
import CommonContext from '../components/commonContext'
import CommonReducer from '../components/commonReducer'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles' 
import { orange } from '@material-ui/core/colors'
const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[700],
        },
        secondary: {
            main: orange[600],
        },
    },
})

function MyApp({ Component, pageProps }) {
    const initialState = useContext(CommonContext)
    const [state, dispatch] = useReducer(CommonReducer, initialState)
 
    return <CommonContext.Provider value={{ state, dispatch }}>  
                <ThemeProvider theme={theme}>    
                    <Component {...pageProps} />
                </ThemeProvider>    
            </CommonContext.Provider>
}
export default MyApp