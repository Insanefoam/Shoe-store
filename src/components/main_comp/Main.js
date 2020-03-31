import React from 'react'

class Main extends React.Component{
    constructor(props) {
        super();

        this.state = {
            models: props.models
        }
        console.log(this.state.models);
    }

    render() {
        return (
            <div className="main">
                <div className="main__brandlogowrap">
                    <img className="main__brandlogo"></img>
                </div>
                <div className="shoeswrap">
                    
                </div>
            </div>
        )
    }
}

export default Main;