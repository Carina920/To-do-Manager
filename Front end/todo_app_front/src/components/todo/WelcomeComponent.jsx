import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/HelloWorldService.js'
import './todo.css'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage: ''
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    render() {
        return (
            <>
                <h1 class="welcome text-center">
                    Welcome, {this.props.match.params.name}!
                </h1>
                <div className="container">
                    <h2 class="manage text-center">
                        Now you can manage your to-do lists. You can add more tasks at any time and delete a task that is completed.
                    </h2>
                    <form action="http://localhost:3000/todos/">
                        <button class="welcome_btn text-center">get started</button>
                    </form>
                </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldService()
        .then( response => this.handleSuccessfulResponse(response))

        HelloWorldService.executeHelloWorldBeanService()
        .then( response => this.handleSuccessfulResponse(response))

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({ welcomeMessage: response.data.message })
    }

    handleError(error) {
        console.log(error.response)
        let errorMessage = '';
        if (error.message)
            errorMessage += error.message
        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }
        this.setState({ welcomeMessage: errorMessage })
    }
}

export default WelcomeComponent