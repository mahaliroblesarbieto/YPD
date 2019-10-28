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
            {this.state.option === "diameters" ?  <OptionDiameters
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
            {this.state.option === "length" ?  <OptionLength
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
            {this.state.option === "perimeters" ?  <OptionPerimeters/> : ''}
            {this.state.option === "skinFold" ?  <OptionSkinFolds/> : ''}
            </>
         );
    }
}
 
export default FirstPageContainer;