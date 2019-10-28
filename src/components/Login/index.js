import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "../styles/login.css";
import "primeflex/primeflex.css";
import {
  Link,
} from "react-router-dom";

const Login = ({ userName, password, handleChange }) => {
  return (
    <>
      <div class="p-grid p-justify-center  margin-div">
        <h1>SISTEMA DE DATOS ANTROPOMETRICOS</h1>
      </div>
      <div class="p-grid p-justify-center margin-div">
        <span className="p-float-label">
          <InputText value={userName} name="userName" onChange={(e) => handleChange(e)} />
          <label htmlFor="in">USUARIO</label>
        </span>
      </div>
      <div class="p-grid p-justify-center margin-div">
        <span className="p-float-label">
          <InputText value={password} name="password" onChange={(e) => handleChange(e)} />
          <label htmlFor="in">CONTRASEÑA</label>
        </span>
      </div>
      <div class="p-grid p-justify-center margin-div">
      <Link to={"/FirstPage"}><Button label="INGRESAR" className="p-button-secondary" /></Link>
      </div>
    </>);
}

export default Login;