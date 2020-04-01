import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props) {
        super(props)
        
        const imgPath = this.createModelPath(props.model.modelName, props.brand);
        this.state = {
            brand: props.brand,
            name: props.model.modelName,
            price: props.model.modelPrice,
            imgPath: imgPath
        }
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
