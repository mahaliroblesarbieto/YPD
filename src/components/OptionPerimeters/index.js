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
    handleChange
}) => {
    return ( <>
    <div class="p-grid p-justify-center margin-div">
    <span className="p-float-label">
    <InputText id="in" value={cabeza} name ="cabeza" onChange={(e) => handleChange(e)}/>
    <label htmlFor="in">Cabeza(cm)</label>
    </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
    <span className="p-float-label">
    <InputText id="in" value={cuello} name ="cuello" onChange={(e) => handleChange(e)} />
    <label htmlFor="in">Cuello(cm)</label>
    </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
    <span className="p-float-label">
    <InputText id="in" value={brazoRelajado} name ="brazoRelajado" onChange={(e) => handleChange(e)} />
    <label htmlFor="in">Brazo relajado(cm)</label>
    </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
    <span className="p-float-label">
    <InputText id="in" value={brazoFlexionado} name ="brazoFlexionado" onChange={(e) => handleChange(e)} />
    <label htmlFor="in">Brazo flexionado(cm)</label>
    </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
    <span className="p-float-label">
    <InputText id="in" value={antebrazoMax} name ="antebrazoMax" onChange={(e) => handleChange(e)} />
    <label htmlFor="in">Antebrazo máximo(cm)</label>
    </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
    <span className="p-float-label">
    <InputText id="in" value={muñeca} name ="muñeca" onChange={(e) => handleChange(e)} />
    <label htmlFor="in">Muñeca(cm)</label>
    </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
    <span className="p-float-label">
    <InputText id="in" value={toraxMeso} name ="toraxMeso" onChange={(e) => handleChange(e)} />
    <label htmlFor="in">Torax mesoesternal(cm)</label>
    </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
    <span className="p-float-label">
    <InputText id="in" value={cinturaMin} name ="cinturaMin" onChange={(e) => handleChange(e)} />
    <label htmlFor="in">Cintura mínima(cm)</label>
    </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
    <span className="p-float-label">
    <InputText id="in" value={caderaMax} name ="caderaMax" onChange={(e) => handleChange(e)} />
    <label htmlFor="in">Cadera máxima(cm)</label>
    </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
    <span className="p-float-label">
    <InputText id="in" value={musloMax} name ="musloMax" onChange={(e) => handleChange(e)} />
    <label htmlFor="in">Muslo máximo(cm)</label>
    </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
    <span className="p-float-label">
    <InputText id="in" value={musloMed} name ="musloMed" onChange={(e) => handleChange(e)} />
    <label htmlFor="in">Muslo medial(cm)</label>
    </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
    <span className="p-float-label">
    <InputText id="in" value={piernaMax} name ="piernaMax" onChange={(e) => handleChange(e)} />
    <label htmlFor="in">Pierna máxima(cm)</label>
    </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
    <span className="p-float-label">
    <InputText id="in" value={tobillo} name ="tobillo" onChange={(e) => handleChange(e)} />
    <label htmlFor="in">Tobillo(cm)</label>
    </span>
    </div>
    </> );
}
 
export default OptionPerimeters;