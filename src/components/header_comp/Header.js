import React from 'react';
import Nav from './Nav';
import './Header.css';
class Header extends React.Component{
    constructor(props) {
        super();

        const navComponents = props.names.map((el, index) => {
            return <Nav name={el} id={index} key={el} changeCurrentBrand={props.changeCurrentBrand}/>
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
                <a className="header__logowrap" href="#">
                    <h1 className="header__logo">{this.state.logoText}</h1>
                </a>
                <nav className="nav">
                    {this.state.navComponents}
                </nav>
            </header>
        )
    }
}

export default Header;