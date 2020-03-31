import React from 'react';
import Item from './Item';

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
        return rawData.models.map((el, index) => <Item brand={rawData.brand} model={el} key={el}/>)
    }

    createPath(brandName){
        return `./assets/logos/${brandName}.svg`
    }

    componentWillReceiveProps(newProps) {
        const newItems = this.createItems(newProps);
        const newPath = this.createPath(newProps.brand);
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
        console.log("rerender with state");
        console.log(this.state.items);
        return (
            <div className="main">
                <div className="main__brandlogowrap">
                    <img className="main__brandlogo" src={this.state.logoPath} alt="Brand Logo"></img>
                </div>
                <div className="shoeswrap">
                    {this.state.items}
                </div>
            </div>
        )
    }
}