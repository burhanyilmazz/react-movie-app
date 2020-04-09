import { NEW_MOVIE_PENDING, NEW_MOVIE_FULFILLED, NEW_MOVIE_REJECTED } from '../actions/newMovie'

const initialState = {
    fetching: false,
    done: false,
    movies: [],
    error: {}
}

export default ( state = initialState, action ) => {
    switch (action.type) {
        case NEW_MOVIE_PENDING :
            return  {
                ...state,
                fetching: true
            }

        case NEW_MOVIE_FULFILLED :
            return  {
                ...state,
                fetching: false,
                done: true,
                movies: action.payload
            }

        case NEW_MOVIE_REJECTED :
            return  {
                ...state,
                fetching: false,
                error: action.payload
            }

        default: 
            return state;
    }
}