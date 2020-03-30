import React from 'react';
import Nav from './Nav';

class Header extends React.Component{
    constructor(props) {
        super();

        this.state = {
            names: props.names
        }
    }

    render(){
        return(
            <header class="header">
                
            </header>
        )
    }
}

export default Header;