import React from "react";
import Header from "./header_comp/Header"
import Main from "./main_comp/Main"

class App extends React.Component{

    constructor(props){
        super();
        console.log(props.shoesData);
    }

    render(){
        return(
            <div class="wrapper">
                <Header />
                <Main />
            </div>
        )
    }
    
}

export default App;