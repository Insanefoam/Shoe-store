import React from "react";
import Header from "./header_comp/Header"
import Main from "./main_comp/Main"

class App extends React.Component{

    constructor(props){
        super();

        let brandsNames = props.shoesData.map((el) => el.brandTag);
        let brandModels = props.shoesData.map((el) => el.brandModels);

        this.state = {
            shoesData: props.shoesData,
            brandsNames: brandsNames,
            brandModels: brandModels,
            currentBrand: 0
        }
    }

    render(){
        return(
            <div className="wrapper">
                <Header names={this.state.brandsNames}/>
                <Main models={this.state.brandModels[this.state.currentBrand]} 
                    brand={this.state.brandsNames[this.state.currentBrand]}/>
            </div>
        )
    }
    
}

export default App;