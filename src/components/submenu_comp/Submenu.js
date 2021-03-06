import React, { Component } from 'react'
import './Submenu.css'

export default class Submenu extends Component {
    constructor(props) {
        super();
        this.state = {
            style: {
                display: props.status,
            }
        }
        if(props.source !== null){
            this.state.imgPath = props.source.imgPath;
            this.state.name = props.source.name;
            this.state.price = props.source.price;
        }
        this.hideOnClick = this.hideOnClick.bind(this);
    }

    componentWillReceiveProps(props){
        console.log(props);
        this.setState((prevState) => {
            let result = {
                style: {
                    display: props.status
                }
            };
            if(props.source !== null){
                result.imgPath = props.source.state.imgPath;
                result.name = props.source.state.name;
                result.price = props.source.state.price;
            }
            console.log(result);
            return result;
            }
        )
    }

    hideOnClick(){
        this.setState((prevState) => {
            return(
                {
                    style: {
                        display: 'none'
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
                         src={this.state.imgPath} 
                         alt="submenu item">
                    </img>
                    <div className="submenu__title">
                        {this.state.name}
                    </div>
                </div>
                <div className="submenu__service">
                    <img className="submenu__close" src="./assets/close.svg" alt="submenu close button"
                         onClick={this.hideOnClick}></img>
                    <input className="submenu__countinput" value="1 шт." type="text"></input>
                    <div className="submenu__finalprice">{this.state.price}</div>
                    <img className="submenu__cart" src="./assets/cart.svg" alt="submenu cart button"></img>
                    <div className="submenu__iteminfo">Супер кроссы класс </div>
                </div>
            </div>
        )
    }
}
