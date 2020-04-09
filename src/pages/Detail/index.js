import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../../redux/actions/movie'

class Detail extends Component {

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
    }

    render() {
        return (
            <div>
               title: {  this.props.movie.movies.title }<br />
               body: {  this.props.movie.movies.body }<br />
            </div>
        )
    }
}

const mapStateToProps = ( { movie }) => {
    return {
        movie,
    }
}

const mapDispatchToProps = {
    fetchMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);