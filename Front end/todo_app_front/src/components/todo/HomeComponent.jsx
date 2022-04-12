import React, { Component } from 'react'
import './todo.css'

class HomeComponent extends Component {
    render() {
        return (
            <>
                <h1 class="welcome text-center">
                    Welcome to To-do Manager!
                </h1>
                <div className="container">
                    <h2 class="manage text-center">
                        Now you can manage your to-do lists. You can add more tasks at any time and delete a task that is completed.
                    </h2>
                </div>
            </>
        )
    }
}

export default HomeComponent