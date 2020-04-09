import axios from 'axios';

export const NEW_MOVIE_FULFILLED = 'NEW_MOVIE_FULFILLED'
export const NEW_MOVIE_REJECTED = 'NEW_MOVIE_REJECTED'
export const NEW_MOVIE_PENDING = 'NEW_MOVIE_PENDING'

export function onNewMovieSubmit( {title, body}) {
    return dispatch => {
        dispatch({
            type: "NEW_MOVIE",
            payload: axios.post("https://jsonplaceholder.typicode.com/posts", {
                title,
                body,
                userId: 2
            }).then(result => result.data)
        })
    }
} 