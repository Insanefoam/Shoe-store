import React from 'react'

export default class Nav extends React.Component {
    constructor(props){
        super();
        this.state = {
            name: props.name,
            id: props.id,
            focus: false
        }
    }

    render() {
        return (
            <a className="nav__el" href="">
                {this.state.name}
            </a>
        )
    }
}
