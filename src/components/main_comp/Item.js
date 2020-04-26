import React, { Component } from 'react'
import './Items.css';

export default class Item extends Component {
    constructor(props) {
        super(props)
        
        const imgPath = this.createModelPath(props.model.modelName, props.brand);
        
        const style = {
            marginRight: '200px'
        };
        if((props.id + 1) % 3 === 0) {
            style.marginRight = '0px'
        };

        this.state = {
            brand: props.brand,
            name: props.model.modelName,
            price: props.model.modelPrice,
            imgPath: imgPath,
            style: style,
            subMenuStyle: {
                display: 'none',
                position: 'absolute'
            }
        }
        this.showSubMenu = this.showSubMenu.bind(this);
    }

    createModelPath(modelName, brandName){
        const modelNameForPath = modelName.toLowerCase().replace(/ /g, '_');
        let brandWithoutSpace = brandName.toLowerCase().replace(/ /g, '_');
        return `./assets/models/${brandWithoutSpace}/${modelNameForPath}.png`;
    }

    componentWillReceiveProps(props){
        const imgPath = this.createModelPath(props.model.modelName, props.brand);
        this.setState((prevState) => {
            return ( {
                brand: props.brand,
                name: props.model.modelName,
                price: props.model.modelPrice,
                imgPath: imgPath
            })
        });
    }
    
    showSubMenu() {
        this.setState((prevState) => {
            return (
                {
                    subMenuStyle: {
                        display: 'inline',
                        position: 'absolute'
                    }
                }
            )
        });
        console.log(this.state);
    }

    render() {
        return (
            <div className="shoeswrap__el" style={this.state.style}>
                <a href="#shoe" id="shoe" onClick={this.showSubMenu}>
                    <img className="el__image" src={this.state.imgPath} alt="Shoe"></img>
                </a>
                <div style={this.state.subMenuStyle} className="el__submenu">hellooo</div>
                <div className="el__name">{this.state.name}</div>
                <div className="el__price">{this.state.price}$</div>
            </div>
        )
    }
}
