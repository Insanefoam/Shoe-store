import React from 'react';
import Nav from './Nav';

class Header extends React.Component{
    constructor(props) {
        super();

        const navComponents = props.names.map((el) => <Nav name={el}/>)

        this.state = {
            logoText: "Sneakershop",
            names: props.names,
            navComponents: navComponents
        }
    }

    render(){
        return(
            <header class="header">
                <h1 class="header__logo">{this.state.logoText}</h1>
                <nav class="header__navigation">
                    {this.state.navComponents}
                </nav>
            </header>
        )
    }
}

export default Header;