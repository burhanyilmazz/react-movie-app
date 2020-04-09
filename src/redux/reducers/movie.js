import { FETCH_MOVIE_PENDING, FETCH_MOVIE_FULFILLED, FETCH_MOVIE_REJECTED } from '../actions/movie'

const initialState = {
    fetching: false,
    movies: [],
    error: {}
}

export default ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_MOVIE_PENDING :
            return  {
                ...state,
                fetching: true
            }

        case FETCH_MOVIE_FULFILLED :
            return  {
                ...state,
                fetching: false,
                movies: action.payload
            }

        case FETCH_MOVIE_REJECTED :
            return  {
                ...state,
                fetching: false,
                error: action.payload
            }

        default: 
            return state;
    }
}