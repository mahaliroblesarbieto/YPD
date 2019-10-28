import React from 'react';
import { InputText } from 'primereact/inputtext';
const OptionSkinFolds = ({triceps}) => {
  return (<>
    <span className="p-float-label">
      <InputText id="in" value={triceps} onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Triceps(mm)</label>
    </span>
    <span className="p-float-label">
      <InputText id="in"  onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Subescapular(mm)</label>
    </span>
    <span className="p-float-label">
      <InputText id="in"  onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Biceps(mm)</label>
    </span>
    <span className="p-float-label">
      <InputText id="in"  onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Suprailiaco(mm)</label>
    </span>
    <span className="p-float-label">
      <InputText id="in"  onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Supraespinal(mm)</label>
    </span>
    <span className="p-float-label">
      <InputText id="in"  onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Abdominal(mm)</label>
    </span>
    <span className="p-float-label">
      <InputText id="in"  onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Muslo medio(mm)</label>
    </span>
    <span className="p-float-label">
      <InputText id="in"  onChange={(e) => this.setState({ value: e.target.value })} />
      <label htmlFor="in">Pantorrilla(mm)</label>
    </span>
  </>);
}

export default OptionSkinFolds;