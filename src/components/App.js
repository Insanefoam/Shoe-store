import React from "react";
import Header from "./header_comp/Header"
import Main from "./main_comp/Main"
import Submenu from "./submenu_comp/Submenu"

class App extends React.Component{

    constructor(props){
        super();

        let brandsNames = props.shoesData.map((el) => el.brandTag);
        let brandModels = props.shoesData.map((el) => el.brandModels);

        this.state = {
            shoesData: props.shoesData,
            brandsNames: brandsNames,
            brandModels: brandModels,
            currentBrand: 0,
            subMenuStatus: 'none',
            subMenuSource: null
        }
        this.changeCurrentBrand = this.changeCurrentBrand.bind(this);
        this.showSubMenu = this.showSubMenu.bind(this);
    }

    changeCurrentBrand(newId){
        this.setState((prevState) => {
            return ({
                currentBrand: newId,
                subMenuStatus: 'none'
            })
        });
    }

    showSubMenu(source){
        this.setState((prevState) => {
            return({
                subMenuStatus: 'inline',
                subMenuSource: source
            })
        })
    }

    render(){
        return(
            <div className="wrapper">
                <Header names={this.state.brandsNames} changeCurrentBrand={this.changeCurrentBrand}/>
                <Main models={this.state.brandModels[this.state.currentBrand]} 
                      brand={this.state.brandsNames[this.state.currentBrand]} 
                      showSubMenu={this.showSubMenu}/>
                <Submenu status={this.state.subMenuStatus} source={this.state.subMenuSource}></Submenu>
            </div>
            
        )
    }
    
}

export default App;