import axios from 'axios';

export const FETCH_MOVIE_FULFILLED = 'FETCH_MOVIE_FULFILLED'
export const FETCH_MOVIE_REJECTED = 'FETCH_MOVIE_REJECTED'
export const FETCH_MOVIE_PENDING = 'FETCH_MOVIE_PENDING'

export function fetchMovie( id ) {
    return dispatch => {
        dispatch({
            type: "FETCH_MOVIE",
            payload: axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(result => result.data)
        })
    }
} 