import React from 'react';
import { InputText } from 'primereact/inputtext';
import "../styles/firstPage.css";
const OptionSkinFolds = ({
  skinFold_1, skinFold_2, skinFold_3, skinFold_4, skinFold_5, skinFold_6, skinFold_7, skinFold_8, handleChange
}) => {
  return (<>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="a" value={skinFold_1} name="skinFold_1" onChange={(e) => handleChange(e)} />
        <label htmlFor="a">Triceps(mm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="b" value={skinFold_2} name="skinFold_2" onChange={(e) => handleChange(e)} />
        <label htmlFor="b">Subescapular(mm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={skinFold_3} name="skinFold_3" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Biceps(mm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={skinFold_4} name="skinFold_4" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Suprailiaco(mm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={skinFold_5} name="skinFold_5" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Supraespinal(mm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={skinFold_6} name="skinFold_6" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Abdominal(mm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={skinFold_7} name="skinFold_7" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Muslo medio(mm)</label>
      </span>
    </div>
    <div class="p-grid p-justify-center margin-div">
      <span className="p-float-label">
        <InputText id="in" value={skinFold_8} name="skinFold_8" onChange={(e) => handleChange(e)} />
        <label htmlFor="in">Pantorrilla(mm)</label>
      </span>
    </div>
  </>);
}

export default OptionSkinFolds;