import React from 'react';
import Item from './Item';
import './Main.css';

export default class Main extends React.Component{
    constructor(props) {
        super();
        
        const logoPath = this.createPath(props.brand);
        const items = this.createItems(props);
        this.state = {
            models: props.models,
            brand: props.brand,
            logoPath: logoPath,
            items: items
        }
        this.createItems = this.createItems.bind(this);
        this.createPath = this.createPath.bind(this);
    }

    createItems(rawData){
        return rawData.models.map((el, index) => <Item brand={rawData.brand} model={el} key={index}/>)
    }

    createPath(brandName){
        let brandWithoutSpace = brandName.toLowerCase().replace(/ /g, '_');
        return `./assets/logos/${brandWithoutSpace}.svg`
    }

    componentWillReceiveProps(newProps) {
        const newItems = this.createItems(newProps);
        const newPath = this.createPath(newProps.brand);
        console.log(newPath);
        this.setState((prevState) => {
            return {
                brand: newProps.brand,
                logoPath: newPath,
                items: newItems
                }
            }
        );
    }

    render() {
        console.log(this.state.logoPath);
        return (
            <div className="main">
                <div className="logowrap">
                    <img className="logowrap__logo" src={this.state.logoPath} alt="Brand Logo"></img>
                </div>
                <div className="shoeswrap">
                    {this.state.items}
                </div>
                <div>
                    <img alt="more"></img>
                </div>
            </div>
        )
    }
}