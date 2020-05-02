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

    render() {
        return (
            <div className="submenu" style={this.state.style}>
                <div className="submenu__item">
                    <img className="submenu__image" src="./assets/models/converse/chuck_taylor_all_star.png"></img>
                    <div className="submenu__title">Chuck Taylor All Star</div>
                </div>
                <div className="submenu__info">
                    <img className="submenu__close" src="./assets/close.svg"></img>
                    <input className="submenu__countinput" value="1 шт."></input>
                    <div className="submenu__finalprice">2200$</div>
                    <img className="submenu__cart" src="./assets/cart.svg"></img>
                    <div className="submenu__info">Супер кроссы класс </div>
                </div>
            </div>
        )
    }
}
