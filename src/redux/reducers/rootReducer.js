import { combineReducers } from 'redux';
import movies from './movies';
import newMovie from './newMovie';
import movie from './movie';

export default combineReducers({
    movies,
    newMovie,
    movie
})