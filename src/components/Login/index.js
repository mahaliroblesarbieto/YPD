import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "primeflex/primeflex.css";

const Login = ({ userName, password, ocurraAlgo }) => {
  return (
    <>
      <div class="p-grid p-justify-center">
        <h1>SISTEMA DE DATOS ANTROPOMETRICOS</h1>
      </div>
      <div class="p-grid p-justify-center">
        <span className="p-float-label">
          <InputText value={userName} onChange={(e) => this.setState({ userName: e.target.value })} />
          <label htmlFor="in">USUARIO</label>
        </span>
      </div>
      <div class="p-grid p-justify-center">
        <span className="p-float-label">
          <InputText value={password} onChange={(e) => this.setState({ password: e.target.value })} />
          <label htmlFor="in">CONTRASEÑA</label>
        </span>
      </div>
      <div class="p-grid p-justify-center">
        <Button label="INGRESAR" className="p-button-secondary" onClick={ocurraAlgo()} />
      </div>
    </>);
}

export default Login;