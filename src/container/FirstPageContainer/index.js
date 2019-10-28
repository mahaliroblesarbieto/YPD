import React, { Component } from 'react';
import FirstPage from '../../components/FirstPage';
import OptionDiameters from '../../components/OptionDiameters';
import OptionLength from '../../components/OptionLength';
import OptionPerimeters from '../../components/OptionPerimeters';
import OptionSkinFolds from '../../components/OptionSkinFolds';
class FirstPageContainer extends Component {
    state = { 
        name: '',
        weight: '',
        height: '',
        heightSitdown: '',
        arms: '',
        option:'',
        cabeza:'',
        cuello:'',
        brazoRelajado:'',
        brazoFlexionado:'',
        antebrazoMax: '',
        muñeca: '',
        toraxMeso: '', 
        cinturaMin: '',
        caderaMax: '',
        musloMax: '',
        musloMed: '',
        piernaMax:'',
        tobillo: '',
     }

    saveName = (e) => {
        this.setState({name: e.target.value})
        console.log(e.target.value); 
    }

    selectOption = (select) => {
        this.setState({option: select})
    }
    render() { 
        return ( 
            <>
            <FirstPage 
            name={this.state.name}
            saveName = {this.saveName}
            weight= {this.state.weight}
            height= {this.state.height}
            heightSitdown={this.state.heightSitdown}
            arms = {this.state.arms}
            selectOption= {this.selectOption}
            />
            {this.state.option === "diameters" ?  <OptionDiameters/> : ''}
            {this.state.option === "length" ?  <OptionLength/> : ''}
            {this.state.option === "perimeters" ?  
            <OptionPerimeters 
            cabeza={this.state.cabeza} 
            cuello={this.state.cuello}
            brazoRelajado={this.state.brazoRelajado}
            brazoFlexionado={this.state.brazoFlexionado}
            antebrazoMax={this.state.antebrazoMax}
            muñeca={this.state.muñeca}
            toraxMeso={this.state.toraxMeso}
            cinturaMin={this.state.cinturaMin}
            caderaMax={this.state.caderaMax}
            musloMax={this.state.musloMax}
            musloMed={this.state.musloMed}
            piernaMax={this.state.piernaMax}
            tobillo={this.state.tobillo}
            /> 
            : ''}
            {this.state.option === "skinFold" ?  <OptionSkinFolds/> : ''}
            </>
         );
    }
}
 
export default FirstPageContainer;