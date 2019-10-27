import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "primeflex/primeflex.css";

const Login = () => {
  return (
    <>
      <div class="p-grid p-justify-center">
        <h1>SISTEMA DE DATOS ANTROPOMETRICOS</h1>
      </div>
      <div class="p-grid p-justify-center">
        <div class="p-col-10">
          <div class="p-grid p-justify-center">
            <div class="p-col-3">
              <div class="box">USUARIO</div>
            </div>
            <div class="p-col-9">
              <div class="box">
                <InputText value={this.state.userName} onChange={(e) => this.setState({ value: e.target.value })} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-grid p-justify-center">
        <div class="p-col-10">
          <div class="p-grid">
            <div class="p-col-6 p-md-6 p-lg-6 p-col-align-end">
              CONTRASEÑA
                            </div>
            <div class="p-col-6 p-md-6 p-lg-6 p-col-align-start">
              <InputText value={this.state.password} onChange={(e) => this.setState({ value: e.target.value })} />
            </div>
          </div>
        </div>
      </div>
      <div class="p-grid p-justify-center">
        <Button label="INGRESAR" className="p-button-secondary" onClick={this.ocurraAlgo} />
      </div>
    </>);
}

export default Login;