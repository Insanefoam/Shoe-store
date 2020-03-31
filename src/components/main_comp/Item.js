import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props) {
        super(props)

        const modelNameForPath = props.model.modelName.toLowerCase().replace(/ /g, '_');
        const imgPath = "./assets/models/" + props.brand + "/" + modelNameForPath + ".png";
        this.state = {
            brand: props.brand,
            name: props.model.modelName,
            price: props.model.modelPrice,
            imgPath: imgPath
        }
    }
    
    render() {
        return (
            <div className="shoeswrap__el">
                <a href="">
                    <img className="el__image" src={this.state.imgPath} alt="Shoe"></img>
                </a>
                <div className="el__name">{this.state.name}</div>
                <div className="el__price">{this.state.price}$</div>
            </div>
        )
    }
}
