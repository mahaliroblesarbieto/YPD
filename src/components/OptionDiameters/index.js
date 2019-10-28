import React from 'react';
import {InputText} from 'primereact/inputtext';
const OptionDiameters = (diametro_1, diametro_2, diametro_3, diametro_4, diametro_5, diametro_6, diametro_7, diametro_8, diametro_9) => {
    return ( <>

    <p>Diámetro</p>
    <p>Biacromial(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={diametro_1} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Biacromial(cm)</label>
    </span>
    <p>Torax transverso(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={diametro_2} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Torax transverso(cm)</label>
    </span>
    <p>Torax Antero-posterior(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={diametro_3} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Torax Antero-posterior(cm)</label>
    </span>
    <p>Bi-iliocrestideo(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={diametro_4} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Bi-iliocrestideo(cm)</label>
    </span>
    <p>Femoral o biepicondilar(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={diametro_5} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Femoral o biepicondilar(cm)</label>
    </span>
    <p>Humeral(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={diametro_6} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Humeral(cm)</label>
    </span>
    <p>Bi-Estiloideo(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={diametro_7} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Bi-Estiloideo(cm)</label>
    </span>
    <p>Abdominal AP(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={diametro_8} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Abdominal AP(cm)</label>
    </span>
    <p>Bi-maleolar(cm)</p>
    <span className="p-float-label">
    <InputText id="in" value={diametro_9} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Bi-maleolar(cm)</label>
    </span>
    </> );
}
export default OptionDiameters;