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
               <Login/>
            </>
        );
    }
}

export default LoginContainer;