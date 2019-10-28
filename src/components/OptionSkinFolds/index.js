import React from 'react';
import { InputText } from 'primereact/inputtext';
const OptionSkinFolds = ({
  skinFold_1, skinFold_2, skinFold_3, skinFold_4, skinFold_5, skinFold_6, skinFold_7, skinFold_8
}) => {
  return (<>
    <span className="p-float-label">
      <InputText id="in" value={skinFold_1} onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Triceps(mm)</label>
    </span>
    <span className="p-float-label">
      <InputText id="in" value={skinFold_2}  onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Subescapular(mm)</label>
    </span>
    <span className="p-float-label">
      <InputText id="in" value={skinFold_3} onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Biceps(mm)</label>
    </span>
    <span className="p-float-label">
      <InputText id="in" value={skinFold_4} onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Suprailiaco(mm)</label>
    </span>
    <span className="p-float-label">
      <InputText id="in" value={skinFold_5} onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Supraespinal(mm)</label>
    </span>
    <span className="p-float-label">
      <InputText id="in" value={skinFold_6} onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Abdominal(mm)</label>
    </span>
    <span className="p-float-label">
      <InputText id="in" value={skinFold_7} onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Muslo medio(mm)</label>
    </span>
    <span className="p-float-label">
      <InputText id="in" value={skinFold_8} onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Pantorrilla(mm)</label>
    </span>
  </>);
}

export default OptionSkinFolds;