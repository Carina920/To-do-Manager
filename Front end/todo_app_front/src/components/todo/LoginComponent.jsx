import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        {/* this.handleUsernameChange = this.handleUsernameChange.bind(this) */}
        {/* this.handlePasswordChange = this.handlePasswordChange.bind(this) */}
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    handleUsernameChange(event) {
         console.log(event.target.name);
         this.setState(
             {
                 [event.target.name]
                   :event.target.value
             }
         )
    }

    handlePasswordChange(event) {
        console.log(event.target.value);
        this.setState({password:event.target.value})
    }

    loginClicked() {
        if(this.state.username==='Carina' && this.state.password==='123456') {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            {/* this.setState({showSuccessMessage: true}) */}
            this.setState({hasLoginFailed: false})
        }
        else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }

        AuthenticationService
        .executeBasicAuthenticationService(this.state.username, this.state.password)
        .then(() => {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
        }).catch( () =>{
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        })

        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(() => {
                this.setState({showSuccessMessage: false})
                this.setState({hasLoginFailed: true})
            })
    }

    render() {
        return (
        <div>
            <h1></h1>
            <div className="container">
                <div class="row justify-content-center">
                    <div class="col-md-6 text-center mb-5">
                        <div class="col-md-6 text-center mb-5"> </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="login-wrap p-0">
                            <h3 class="mb-4 text-center">Have an account?</h3>
                            <form action="#" class="signin-form">
                                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                                {this.state.hasLoginFailed && <div className="alert alert-warning">Incorrect username or password.</div>}
                                {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                                {this.state.showSuccessMessage && <div>Login Successful!</div>}

                                <div class="form-group">
                                    <input type="text" name="username" class="form-control" value={this.state.username} onChange={this.handleChange} placeholder="Username" required />
                                </div>

                                <div class="form-group">
                                    <input id="password-field" type="password" name="password" class="form-control" value={this.state.password} onChange={this.handleChange} placeholder="Password" required />
                                    <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                </div>

                                <div class="form-group">
                                    <button type="submit" className="btn btn-success" onClick={this.loginClicked} class="form-control btn btn-primary submit px-3">Sign In</button>
                                </div>

                                <div class="form-group d-md-flex">
                                    <div class="w-50">
                                        <label class="checkbox-wrap checkbox-primary">Remember Me
                                            <input type="checkbox"/>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="w-50 text-md-right">
                                        <a href="#">Forgot Password</a>
                                    </div>
                                </div>
                            </form>
                            <p class="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                            <div class="social d-flex text-center">
                                <a href="https://www.facebook.com/" class="px-2 py-2 mr-md-1 rounded"><span class="ion-logo-facebook mr-2"></span> Facebook</a>
                                <a href="https://twitter.com/i/flow/login" class="px-2 py-2 ml-md-1 rounded"><span class="ion-logo-twitter mr-2"></span> Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

{/*
function ShowInvalidCredentials(props) {
    if (props.hasLoginFailed) {
        return <div>Incorrect username or password.</div>
    }
    return null;
}

function ShowLoginSuccessMessage(props) {
    if (props.showSuccessMessage) {
        return <div>Login Successful!</div>
    }
    return null;
}
*/}

export default LoginComponent