import React from 'react';
import {InputText} from 'primereact/inputtext';
const OptionLength = (longitud_1, longitud_2, longitud_3, longitud_4, longitud_5, longitud_6, longitud_7, longitud_8, longitud_9) => {
    return ( <>
    <p>Longitudes/altura</p>
    <span className="p-float-label">
    <InputText id="in" value={longitud_1} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Acromio-radial(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={longitud_2} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Radial-estiloideo(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={longitud_3} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Estiloideo medio-Dactilar(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={longitud_4} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Altura ileoespinal(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={longitud_5} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Altura trocantérea(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={longitud_6} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Troncantéreo-Tibial lateral(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={longitud_7} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Troncantéreo-Tibial lateral(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={longitud_8} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Tibial medial-Malcolar(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={longitud_9} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Pie(cm)</label>
    </span>
    </> );
}
 
export default OptionLength;