import React from 'react'

export default class Nav extends React.Component {
    constructor(props){
        super();
        this.state = {
            name: props.name
        }
    }

    render() {
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}
