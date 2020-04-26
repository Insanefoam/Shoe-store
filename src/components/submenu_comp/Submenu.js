import React, { Component } from 'react'
import './Submenu.css'

export default class Submenu extends Component {
    constructor(props) {
        super();

        this.state = {
            style: {
                display: props.status
            }
        }
    }

    componentWillReceiveProps(props){
        this.setState((prevState) => {
            return(
                {
                    style: {
                        display: props.status
                    }
                }
            )
        })
    }

    render() {
        return (
            <div className="submenu" style={this.state.style}>
                submenu
            </div>
        )
    }
}
