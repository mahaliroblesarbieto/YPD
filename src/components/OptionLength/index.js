import React from 'react';
import {InputText} from 'primereact/inputtext';
const OptionLength = (longitud_1, longitud_2, longitud_3, longitud_4, longitud_5, longitud_6, longitud_7, longitud_8, longitud_9) => {
    return ( <>
    <p>Longitudes/altura</p>
    <p>Acromio-radial(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={longitud_1} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Acromio-radial(cm)</label>
    </span>
    <p>Radial-estiloideo(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={longitud_2} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Radial-estiloideo(cm)</label>
    </span>
    <p>Estiloideo medio-Dactilar(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={longitud_3} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Estiloideo medio-Dactilar(cm)</label>
    </span>
    <p>Altura ileoespinal(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={longitud_4} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Altura ileoespinal(cm)</label>
    </span>
    <p>Altura trocantérea(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={longitud_5} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Altura trocantérea(cm)</label>
    </span>
    <p>Troncantéreo-Tibial lateral(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={longitud_6} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Troncantéreo-Tibial lateral(cm)</label>
    </span>
    <p>Altura tibial lateral(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={longitud_7} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Troncantéreo-Tibial lateral(cm)</label>
    </span>
    <p>Tibial medial-Malcolar(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={longitud_8} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Tibial medial-Malcolar(cm)</label>
    </span>
    <p>Pie(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={longitud_9} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Pie(cm)</label>
    </span>
    </> );
}
 
export default OptionLength;