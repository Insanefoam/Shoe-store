import React, { Component } from 'react'
import './Submenu.css'

export default class Submenu extends Component {
    constructor(props) {
        super();

        this.state = {
            style: {
                display: props.status
            }
        }
        this.hideOnClick = this.hideOnClick.bind(this);
    }

    componentWillReceiveProps(props){
        this.setState((prevState) => {
            return(
                {
                    style: {
                        display: props.status
                    }
                }
            )
        })
    }

    hideOnClick(){
        this.setState((prevState) => {
            return(
                {
                    style: {
                        display: "none"
                    }
                }
            )
        })
    }

    render() {
        return (
            <div className="submenu" style={this.state.style}>
                <div className="submenu__item">
                    <img className="submenu__image" 
                         src="./assets/models/converse/chuck_taylor_all_star.png" 
                         alt="submenu item">
                    </img>
                    <div className="submenu__title">
                        Chuck Taylor All Star
                    </div>
                </div>
                <div className="submenu__service">
                    <img className="submenu__close" src="./assets/close.svg" alt="submenu close button"
                         onClick={this.hideOnClick}></img>
                    <input className="submenu__countinput" value="1 шт." type="text"></input>
                    <div className="submenu__finalprice">2200$</div>
                    <img className="submenu__cart" src="./assets/cart.svg" alt="submenu cart button"></img>
                    <div className="submenu__iteminfo">Супер кроссы класс </div>
                </div>
            </div>
        )
    }
}
