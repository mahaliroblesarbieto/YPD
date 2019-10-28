import React from 'react';
import { InputText } from 'primereact/inputtext';
// import {CodeHighlight} from '../codehighlight/CodeHighlight';
// import CodeHighlight from 'code-highlight';

// // import all the styles
// import "code-highlight/lib/style.css";
// import "highlight.js/styles/xcode.css";
const OptionDiameters = (diametro_1, diametro_2, diametro_3, diametro_4, diametro_5, diametro_6, diametro_7, diametro_8, diametro_9) => {
  return (<>
    {/* <CodeHighlight className="language-jsx"> */}
    <div class="p-grid">
      <span className="p-float-label">
        <InputText id="in" id="float-input" type="text" size="30" value={diametro_1} onChange={(e) => this.setState({ value: e.target.value })} />
        <label htmlFor="in">Biacromial(cm)</label>
      </span>
    </div>
    <div class="p-grid">
      <span className="p-float-label">
        <InputText id="in" value={diametro_2} onChange={(e) => this.setState({ value: e.target.value })} />
        <label htmlFor="in">Torax transverso(cm)</label>
      </span>
    </div>
    <div class="p-grid">
      <span className="p-float-label">
        <InputText id="in" value={diametro_3} onChange={(e) => this.setState({ value: e.target.value })} />
        <label htmlFor="in">Torax Antero-posterior(cm)</label>
      </span>
    </div>
    <div class="p-grid">
      <span className="p-float-label">
        <InputText id="in" value={diametro_4} onChange={(e) => this.setState({ value: e.target.value })} />
        <label htmlFor="in">Bi-iliocrestideo(cm)</label>
      </span>
    </div>
    <div class="p-grid">
      <span className="p-float-label">
        <InputText id="in" value={diametro_5} onChange={(e) => this.setState({ value: e.target.value })} />
        <label htmlFor="in">Femoral o biepicondilar(cm)</label>
      </span>
    </div>
    <div class="p-grid">
      <span className="p-float-label">
        <InputText id="in" value={diametro_6} onChange={(e) => this.setState({ value: e.target.value })} />
        <label htmlFor="in">Humeral(cm)</label>
      </span>
    </div>
    <div class="p-grid">
      <span className="p-float-label">
        <InputText id="in" value={diametro_7} onChange={(e) => this.setState({ value: e.target.value })} />
        <label htmlFor="in">Bi-Estiloideo(cm)</label>
      </span>
    </div>
    <div class="p-grid">
      <span className="p-float-label">
        <InputText id="in" value={diametro_8} onChange={(e) => this.setState({ value: e.target.value })} />
        <label htmlFor="in">Abdominal AP(cm)</label>
      </span>
    </div>
    <div class="p-grid">
      <span className="p-float-label">
        <InputText id="in" value={diametro_9} onChange={(e) => this.setState({ value: e.target.value })} />
        <label htmlFor="in">Bi-maleolar(cm)</label>
      </span>
    </div>
  </>);
}
export default OptionDiameters;