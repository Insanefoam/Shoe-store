import React from 'react'
import Item from './Item'
class Main extends React.Component{
    constructor(props) {
        super();
        
        const logoPath = "./assets/logos/" + props.brand + ".svg";
        const items = props.models.map((el) => <Item brand={props.brand} model={el}/>)
        this.state = {
            models: props.models,
            brand: props.brand,
            logoPath: logoPath,
            items: items
        }
    }

    render() {
        return (
            <div className="main">
                <div className="main__brandlogowrap">
                    <img className="main__brandlogo" src={this.state.logoPath}></img>
                </div>
                <div className="shoeswrap">
                    {this.state.items}
                </div>
            </div>
        )
    }
}

export default Main;