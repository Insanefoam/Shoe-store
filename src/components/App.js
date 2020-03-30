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
            brandModels: brandModels
        }
    }

    render(){
        return(
            <div className="wrapper">
                <Header names={this.state.brandModels}/>
                <Main models={this.state.brandModels}/>
            </div>
        )
    }
    
}

export default App;