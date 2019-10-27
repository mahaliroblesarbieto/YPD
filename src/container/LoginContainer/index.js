import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "primeflex/primeflex.css";

class LoginContainer extends Component {
    state = {
        userName: '',
        password: '',
    }
    render() {
        return (
            <>
                <h1>SISTEMA DE DATOS ANTROPOMETRICOS</h1>
                <div class="p-grid">
                    <div class="p-col-2">USUARIO</div>
                    <div class="p-col-6"><InputText value={this.state.userName} onChange={(e) => this.setState({ value: e.target.value })} /></div>
                </div>
                <div class="p-grid">
                    <div class="p-col-6">
                        CONTRASEÑA
                    </div>
                    <div class="p-col-6">
                        <InputText value={this.state.password} onChange={(e) => this.setState({ value: e.target.value })} />
                    </div>
                </div>
                <div class="p-grid">
                <Button label="INGRESAR" className="p-button-secondary" />
                </div>
                
            </>
        );
    }
}

export default LoginContainer;