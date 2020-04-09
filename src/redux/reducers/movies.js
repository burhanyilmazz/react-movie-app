import { FETCH_MOVIES_PENDING, FETCH_MOVIES_FULFILLED, FETCH_MOVIES_REJECTED } from '../actions/movies'

const initialState = {
    fetching: false,
    movies: [],
    error: {}
}

export default ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_MOVIES_PENDING :
            return  {
                ...state,
                fetching: true
            }

        case FETCH_MOVIES_FULFILLED :
            return  {
                ...state,
                fetching: false,
                movies: action.payload
            }

        case FETCH_MOVIES_REJECTED :
            return  {
                ...state,
                fetching: false,
                error: action.payload
            }

        default: 
            return state;
    }
}