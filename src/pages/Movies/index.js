import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MovieList from '../../components/MovieList'
import { fetchMovies } from '../../redux/actions/movies'

class Movies extends Component {
    static propTypes = {
        movies: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        return (
            <div>
                <MovieList movies={this.props.movies} />
            </div>
        )
    }
}

const mapStateToProps = ( { movies } ) => {
    return {
        movies
    }
}

const mapDispatchToProps = {
    fetchMovies
}


export default connect(mapStateToProps, mapDispatchToProps)(Movies);