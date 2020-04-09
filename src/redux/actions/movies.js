import axios from 'axios';

export const FETCH_MOVIES_FULFILLED = 'FETCH_MOVIES_FULFILLED'
export const FETCH_MOVIES_REJECTED = 'FETCH_MOVIES_REJECTED'
export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING'

export function fetchMovies() {
    return dispatch => {
        dispatch({
            type: "FETCH_MOVIES",
            payload: axios.get("https://jsonplaceholder.typicode.com/posts").then(result => result.data)
        })
    }
} 