import React from 'react';
import {InputText} from 'primereact/inputtext';
const OptionPerimeters = ({
    cabeza, 
    cuello, 
    brazoRelajado, 
    brazoFlexionado, 
    antebrazoMax, 
    muñeca, 
    toraxMeso, 
    cinturaMin,
    caderaMax,
    musloMax,
    musloMed,
    piernaMax,
    tobillo,
}) => {
    return ( <>
    <span className="p-float-label">
    <InputText id="in" value={cabeza} onChange={(e) => console.log(e)}/>
    <label htmlFor="in">Cabeza(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={cuello} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Cuello(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={brazoRelajado} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Brazo relajado(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={brazoFlexionado} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Brazo flexionado(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={antebrazoMax} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Antebrazo máximo(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={muñeca} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Muñeca(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={toraxMeso} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Torax mesoesternal(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={cinturaMin} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Cintura mínima(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={caderaMax} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Cadera máxima(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={musloMax} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Muslo máximo(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={musloMed} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Muslo medial(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={piernaMax} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Pierna máxima(cm)</label>
    </span>
    <span className="p-float-label">
    <InputText id="in" value={tobillo} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Tobillo(cm)</label>
    </span>
    </> );
}
 
export default OptionPerimeters;