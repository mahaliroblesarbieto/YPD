import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "../styles/firstPage.css";
const FirstPage = ({ name,  weight, height, heightSitdown, arms, selectOption, handleChange }) => {
  return (
    <>
      <div class="p-grid p-justify-center margin-div">
        <p>INGRESO DE DATOS</p>
      </div>
      <div class="p-grid p-justify-center margin-div">
        <span className="p-float-label">
          <InputText value={name} name ="name" onChange={(e) => handleChange(e)} />
          <label htmlFor="in">Nombre de Deportista</label>
        </span>
      </div>
      <div class="p-grid p-justify-center margin-div">
        <span className="p-float-label">
          <InputText id="in" value={weight} name="weight" onChange={(e) => handleChange(e)} />
          <label htmlFor="in">Peso</label>
        </span>
      </div>
      <div class="p-grid p-justify-center margin-div">
        <span className="p-float-label">
          <InputText id="in" value={height} name="height" onChange={(e) => handleChange(e)} />
          <label htmlFor="in">Estatura</label>
        </span>
      </div>
      <div class="p-grid p-justify-center margin-div">
        <span className="p-float-label">
          <InputText id="in" value={heightSitdown} name="heightSitdown" onChange={(e) => handleChange(e)} />
          <label htmlFor="in">Estatura sentado</label>
        </span>
      </div>
      <div class="p-grid p-justify-center margin-div">
        <span className="p-float-label">
          <InputText id="in" value={arms} name="arms" onChange={(e) => handleChange(e)} />
          <label htmlFor="in">Envergadura de brazos (cm)</label>
        </span>
      </div>
      <Button label="Longitudes/alturas" onClick={() => selectOption("length")} />
      <Button label="Diámetros" onClick={() => selectOption("diameters")} />
      <Button label="Perimetros" onClick={() => selectOption("perimeters")} />
      <Button label="Pliegues cutáneos" onClick={() => selectOption("skinFold")} />
    </>
  );
}

export default FirstPage;