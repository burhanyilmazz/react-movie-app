import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Form } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

export default class index extends Component {
    state = {
        title: "",
        body: "",
        errors: {}
    }

    static propTypes = {
        onNewMovieSubmit: PropTypes.func.isRequired
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = () => {
        const errors = this.validate()
        this.setState({
            errors
        })

        if (Object.keys(errors).length === 0) {
            this.props.onNewMovieSubmit(this.state)
        }
    }

    validate = () => {
        const errors = {};
        if(!this.state.title) errors.title = "cant be blank"
        if(!this.state.body) errors.body = "cant be blank"

        return errors
    }

    render() {
        const { errors } = this.state;
        const form = (
            <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
                <Form.Field error={!!errors.title}>
                    <label>Title</label>
                    { errors.title }
                    <input placeholder='title' name="title" value={this.state.title} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field error={!!errors.body}>
                    <label>Body</label>
                    { errors.body }
                    <input placeholder='body' name="body" value={this.state.body} onChange={this.handleChange} />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
        return (
            <div>
                { this.props.newMovie.done ? <Redirect to="/Movies" /> : form }
            </div>
        )
    }
}
