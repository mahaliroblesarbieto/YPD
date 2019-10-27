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
            {this.state.option === "perimeters" ?  <OptionPerimeters/> : ''}
            {this.state.option === "skinFold" ?  <OptionSkinFolds/> : ''}
            </>
         );
    }
}
 
export default FirstPageContainer;