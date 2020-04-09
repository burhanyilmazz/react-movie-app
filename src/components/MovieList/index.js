import React from 'react'
import PropTypes from 'prop-types'
import './MovieList.scss';
import { HashLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

const MovieList = ({ movies }) => {
    return (
        <div className="cards"> 
            <HashLoader color={'#123abc'} loading={movies.fetching} />
            { movies.movies.map( movie => <MovieListCard key={movie.id}  data={movie} />) }
        </div>
    )
}

const MovieListCard = ({ data }) => {
    return (
        <div className="cards__card">
            <h6>{ data.id } - { data.title }</h6>
            <Link to={`/detail/${data.id}`}>Detail</Link>
        </div>
    )
}

MovieList.propTypes = {
    movies: PropTypes.shape({
        movies: PropTypes.array.isRequired
    }).isRequired
}

export default MovieList
