import React from 'react';
import { InputText } from 'primereact/inputtext';
// import {CodeHighlight} from '../codehighlight/CodeHighlight';
// import CodeHighlight from 'code-highlight';

// // import all the styles
// import "code-highlight/lib/style.css";
// import "highlight.js/styles/xcode.css";
const OptionDiameters = ({diametro_1, diametro_2, diametro_3, diametro_4, diametro_5, diametro_6, diametro_7, diametro_8, diametro_9, handleChange}) => {
  return (<>
    {/* <CodeHighlight className="language-jsx"> */}
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={diametro_1} name ="diametro_1" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Biacromial(cm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={diametro_2} name ="diametro_2" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Torax transverso(cm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={diametro_3} name ="diametro_1" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Torax Antero-posterior(cm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={diametro_4} name ="diametro_1" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Bi-iliocrestideo(cm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={diametro_5} name ="diametro_1" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Femoral o biepicondilar(cm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={diametro_6} name ="diametro_1" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Humeral(cm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={diametro_7} name ="diametro_1" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Bi-Estiloideo(cm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={diametro_8} name ="diametro_1" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Abdominal AP(cm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={diametro_9} name ="diametro_1" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Bi-maleolar(cm)</label>
      </span>
    </div>
  </>);
}
export default OptionDiameters;