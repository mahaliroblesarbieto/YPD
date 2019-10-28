import React, { Component } from 'react';
import Login from '../../components/Login';

class LoginContainer extends Component {
    state = {
        userName: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <>
               <Login
               userName={this.state.userName}
               password={this.state.password}
               handleChange={this.handleChange}
               />
            </>
        );
    }
}

export default LoginContainer;