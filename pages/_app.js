import { useContext, useReducer }  from 'react'

import 'pure-react-carousel/dist/react-carousel.es.css'
import CommonContext from '../components/commonContext'
import CommonReducer from '../components/commonReducer'
function MyApp({ Component, pageProps }) {
    const initialState = useContext(CommonContext)
    const [state, dispatch] = useReducer(CommonReducer, initialState)
 
    return <CommonContext.Provider value={{ state, dispatch }}>  
                <Component {...pageProps} />
            </CommonContext.Provider>
}
export default MyApp