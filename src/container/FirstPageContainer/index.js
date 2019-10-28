import React, { Component } from 'react';
import FirstPage from '../../components/FirstPage';
import OptionDiameters from '../../components/OptionDiameters';
import OptionLength from '../../components/OptionLength';
import OptionPerimeters from '../../components/OptionPerimeters';
import OptionSkinFolds from '../../components/OptionSkinFolds';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
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
        longitud_1:'',
        longitud_2:'',
        longitud_3:'',
        longitud_4:'',
        longitud_5:'',
        longitud_6:'',
        longitud_7:'',
        longitud_8:'',
        longitud_9:'',
        diametro_1:'',
        diametro_2:'',
        diametro_3:'',
        diametro_4:'',
        diametro_5:'',
        diametro_6:'',
        diametro_7:'',
        diametro_8:'',
        diametro_9:'',
        triceps: '',
        skinFold_1:'',
        skinFold_2:'',
        skinFold_3:'',
        skinFold_4:'',
        skinFold_5:'',
        skinFold_6:'',
        skinFold_7:'',
        skinFold_8:'',
        
        
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
            {this.state.option === "diameters" ?  
            <OptionDiameters
            diametro_1 = {this.state.diametro_1}
            diametro_2 = {this.state.diametro_2}
            diametro_3 = {this.state.diametro_3}
            diametro_4 = {this.state.diametro_4}
            diametro_5 = {this.state.diametro_5}
            diametro_6 = {this.state.diametro_6}
            diametro_7 = {this.state.diametro_7}
            diametro_8 = {this.state.diametro_8}
            diametro_9 = {this.state.diametro_9}
            />
             : ''}
            {this.state.option === "length" ?  
            <OptionLength
            longitud_1 = {this.state.longitud_1}
            longitud_2 = {this.state.longitud_2}
            longitud_3 = {this.state.longitud_3}
            longitud_4 = {this.state.longitud_4}
            longitud_5 = {this.state.longitud_5}
            longitud_6 = {this.state.longitud_6}
            longitud_7 = {this.state.longitud_7}
            longitud_8 = {this.state.longitud_8}
            longitud_9 = {this.state.longitud_9}
            />
            : ''}
            {this.state.option === "skinFold" ?  
            <OptionSkinFolds
            skinFold_1 = {this.state.skinFold_1}
            skinFold_2 = {this.state.skinFold_2}
            skinFold_3 = {this.state.skinFold_3}
            skinFold_4 = {this.state.skinFold_4}
            skinFold_5 = {this.state.skinFold_5}
            skinFold_6 = {this.state.skinFold_6}
            skinFold_7 = {this.state.skinFold_7}
            skinFold_8 = {this.state.skinFold_8}
            /> : ''}
            </>
         );
    }
}
 
export default FirstPageContainer;