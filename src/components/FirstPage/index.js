import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "../styles/firstPage.css";
const FirstPage = ({ name, saveName, weight, height, heightSitdown, arms, selectOption }) => {
  return (
    <>
      <div class="p-grid p-justify-center margin-div">
        <p>INGRESO DE DATOS</p>
      </div>
      <div class="p-grid p-justify-center margin-div">
        <span className="p-float-label">
          <InputText value={name} onChange={(e) => saveName(e)} />
          <label htmlFor="in">Nombre de Deportista</label>
        </span>
      </div>
      <div class="p-grid p-justify-center margin-div">
        <span className="p-float-label">
          <InputText id="in" value={weight} onChange={(e) => this.setState({ value: e.target.value })} />
          <label htmlFor="in">Peso</label>
        </span>
      </div>
      <div class="p-grid p-justify-center margin-div">
        <span className="p-float-label">
          <InputText id="in" value={height} onChange={(e) => this.setState({ value: e.target.value })} />
          <label htmlFor="in">Estatura</label>
        </span>
      </div>
      <div class="p-grid p-justify-center margin-div">
        <span className="p-float-label">
          <InputText id="in" value={heightSitdown} onChange={(e) => this.setState({ value: e.target.value })} />
          <label htmlFor="in">Estatura sentado</label>
        </span>
      </div>
      <div class="p-grid p-justify-center margin-div">
        <span className="p-float-label">
          <InputText id="in" value={arms} onChange={(e) => this.setState({ value: e.target.value })} />
          <label htmlFor="in">Envergadura de brazos (cm)</label>
        </span>
      </div>
      <div class="p-grid p-justify-center margin-div">
        <span className="p-float-label">
          <InputText id="in" value={arms} onChange={(e) => this.setState({ value: e.target.value })} />
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