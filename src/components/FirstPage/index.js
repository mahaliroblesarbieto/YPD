import React  from 'react';
import { InputText } from 'primereact/inputtext';
import {Button} from 'primereact/button';
const FirstPage = ({ name, saveName, weight, height, heightSitdown, arms, selectOption }) => {
    return (
        <>
            <p>INGRESO DE DATOS</p>
            <InputText value={name} onChange={(e) => saveName(e)} />
            <span className="p-float-label">
                <InputText id="in" value={weight} onChange={(e) => this.setState({ value: e.target.value })} />
                <label htmlFor="in">Peso</label>
            </span>
            <span className="p-float-label">
                <InputText id="in" value={height} onChange={(e) => this.setState({ value: e.target.value })} />
                <label htmlFor="in">Estatura</label>
            </span>
            <span className="p-float-label">
                <InputText id="in" value={heightSitdown} onChange={(e) => this.setState({ value: e.target.value })} />
                <label htmlFor="in">Estatura sentado</label>
            </span>
            <span className="p-float-label">
                <InputText id="in" value={arms} onChange={(e) => this.setState({ value: e.target.value })} />
                <label htmlFor="in">Envergadura de brazos (cm)</label>
            </span>
            <Button label="Longitudes/alturas" onClick = {() => selectOption("length")} />
            <Button label="Diámetros" onClick = {() => selectOption("diameters")}/>
            <Button label="Perimetros" onClick = {() => selectOption("perimeters")}/>
            <Button label="Pliegues cutáneos" onClick = {() => selectOption("skinFold")}/>
        </>
    );
}

export default FirstPage;