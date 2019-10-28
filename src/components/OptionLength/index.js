import React from 'react';
import { InputText } from 'primereact/inputtext';
import "../styles/firstPage.css";
const OptionLength = ({
    longitud_1, 
    longitud_2, 
    longitud_3, 
    longitud_4, 
    longitud_5, 
    longitud_6, 
    longitud_7, 
    longitud_8, 
    longitud_9, 
    handleChange
}) => {
    return (<>
        <div class="p-grid p-justify-center margin-div">
            <span className="p-float-label">
                <InputText id="in" value={longitud_1} name ="longitud_1" onChange={(e) => handleChange(e)} />
                <label htmlFor="in">Acromio-radial(cm)</label>
            </span>
        </div>
        <div class="p-grid p-justify-center margin-div">
            <span className="p-float-label">
            <InputText id="in" value={longitud_2} name ="longitud_2" onChange={(e) => handleChange(e)} />
            <label htmlFor="in">Radial-estiloideo(cm)</label>
            </span>
        </div>
        <div class="p-grid p-justify-center margin-div">
            <span className="p-float-label">
            <InputText id="in" value={longitud_3} name ="longitud_3" onChange={(e) => handleChange(e)} />
            <label htmlFor="in">Estiloideo medio-Dactilar(cm)</label>
            </span>
        </div>
        <div class="p-grid p-justify-center margin-div">
            <span className="p-float-label">
            <InputText id="in" value={longitud_4} name ="longitud_4" onChange={(e) => handleChange(e)} />
            <label htmlFor="in">Altura ileoespinal(cm)</label>
            </span>
        </div>
        <div class="p-grid p-justify-center margin-div">
            <span className="p-float-label">
            <InputText id="in" value={longitud_5} name ="longitud_5" onChange={(e) => handleChange(e)} />
            <label htmlFor="in">Altura trocantérea(cm)</label>
            </span>
        </div>
        <div class="p-grid p-justify-center margin-div">
            <span className="p-float-label">
            <InputText id="in" value={longitud_6} name ="longitud_6" onChange={(e) => handleChange(e)} />
            <label htmlFor="in">Troncantéreo-Tibial lateral(cm)</label>
            </span>
        </div>
        <div class="p-grid p-justify-center margin-div">
            <span className="p-float-label">
            <InputText id="in" value={longitud_8} name ="longitud_8" onChange={(e) => handleChange(e)} />
            <label htmlFor="in">Tibial medial-Malcolar(cm)</label>
            </span>
        </div>
        <div class="p-grid p-justify-center margin-div">
            <span className="p-float-label">
            <InputText id="in" value={longitud_9} name ="longitud_9" onChange={(e) => handleChange(e)} />
            <label htmlFor="in">Pie(cm)</label>
            </span>
        </div>
    </>);
}

export default OptionLength;