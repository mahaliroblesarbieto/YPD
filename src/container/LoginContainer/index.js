import React, { Component } from 'react';
import Login from '../../components/Login';

class LoginContainer extends Component {
    state = {
        userName: '',
        password: '',
    }

    ocurraAlgo = () => {
    }
    render() {
        return (
            <>
               <Login
               userName={this.state.userName}
               password={this.state.password}
               ocurraAlgo={this.ocurraAlgo}
               />
            </>
        );
    }
}

export default LoginContainer;