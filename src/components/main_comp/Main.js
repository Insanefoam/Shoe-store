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
            currentItems: currentItems,
            availableItems: availableItems,
        }
        this.createItems = this.createItems.bind(this);
        this.createPath = this.createPath.bind(this);
        this.loadMoreItems = this.loadMoreItems.bind(this);
    }

    createItems(rawData){
        return rawData.models.map((el, index) => <Item brand={rawData.brand} 
                                    model={el} id={index} key={el}
                                    showSubMenu={rawData.showSubMenu}/>)
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
                currentItems: currentItems,
                availableItems: availableItems
                }
            }
        );
    }

    loadMoreItems(){
        const itemsToAdd = this.state.availableItems.slice(0, 3);
        const currentItems = this.state.currentItems.concat(itemsToAdd);
        const availableItems = this.state.availableItems.slice(
                                itemsToAdd.length, 
                                this.state.availableItems.length);
        console.log(currentItems);
        this.setState((prevState) => {
            return {
                currentItems: currentItems,
                availableItems: availableItems
            }
        })
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
                <a href="#morewrap" className="morewrap" onClick={this.loadMoreItems} id="morewrap">
                    <img alt="more" src="./assets/bottomarrow.svg" className="morewrap__more"></img>
                </a>
            </div>
        )
    }
}