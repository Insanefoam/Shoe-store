import React from 'react';
import Nav from './Nav';

class Header extends React.Component{
    constructor(props) {
        super();

        const navComponents = props.names.map((el, index) => {
            return <Nav name={el} id={index} key={index} changeCurrentBrand={props.changeCurrentBrand}/>
        })

        this.state = {
            logoText: "Sneakershop",
            names: props.names,
            navComponents: navComponents
        }
    }

    render(){
        return(
            <header className="header">
                <h1 className="header__logo">{this.state.logoText}</h1>
                <nav className="nav">
                    {this.state.navComponents}
                </nav>
            </header>
        )
    }
}

export default Header;