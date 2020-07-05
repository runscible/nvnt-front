import { INIT_DATA, FILTER_DATA, SELECT_TYPE  } from '../components/constants'

export default function CommonReducer(state, { type, payload } ) {
    switch (type) {
        case INIT_DATA:
            return {
                ...state,
                results: payload,
                initialState: payload
            }
        case FILTER_DATA:
            // TODO: hacer el filtro 
            return {
                ...state
            }    
        case SELECT_TYPE: 
            const { operationType, results } = payload
            return {
                ...state,
                operationType,
                results: {
                    data: results
                }
            }    
        default:
            console.log('los valores que entraron son ', type, payload)
            
            return state
    }   
}