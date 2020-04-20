import React from 'react';
import Item from './Item';
import './Main.css';

export default class Main extends React.Component{
    constructor(props) {
        super();
        
        const logoPath = this.createPath(props.brand);
        const items = this.createItems(props);
        const currentItems = items.slice(0, 3);
        const availableItems = items.slice(3, items.length);
        this.state = {
            models: props.models,
            brand: props.brand,
            logoPath: logoPath,
            availableItems: availableItems,
            currentItems: currentItems
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
        const currentItems = newItems.slice(0, 3);
        const availableItems = newItems.slice(3, newItems.length);
        this.setState((prevState) => {
            return {
                brand: newProps.brand,
                logoPath: newPath,
                availableItems: newItems,
                currentItems: currentItems
                }
            }
        );
    }

    loadMoreItems(){

    }

    render() {
        return (
            <div className="main">
                <div className="logowrap">
                    <img className="logowrap__logo" src={this.state.logoPath} alt="Brand Logo"></img>
                </div>
                <div className="shoeswrap">
                    {this.state.currentItems}
                </div>
                <a href="#" className="morewrap" onClick={this.loadMoreItems}>
                    <img alt="more" src="./assets/bottomarrow.svg" className="morewrap__more"></img>
                </a>
            </div>
        )
    }
}