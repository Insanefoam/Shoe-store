import React from 'react'
import Item from './Item'
class Main extends React.Component{
    constructor(props) {
        super();
        
        const logoPath = "./assets/logos/" + props.brand + ".svg";
        const items = props.models.map((el, index) => <Item brand={props.brand} model={el} key={index}/>)
        this.state = {
            models: props.models,
            brand: props.brand,
            logoPath: logoPath,
            items: items
        }
    }

    componentWillReceiveProps(props) {
        console.log("i recieve props");
        console.log(props);
    }

    render() {
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

export default Main;