import React from 'react'

export default class Nav extends React.Component {
    constructor(props){
        super();
        this.state = {
            name: props.name,
            id: props.id,
            focus: false,
            changeCurrentBrand: props.changeCurrentBrand
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState((prevState) => {
            prevState.changeCurrentBrand(prevState.id);
            return {
                focus: true
            }
        })
    }

    render() {
        return (
            <a className="nav__el" onClick={this.clickHandler}>
                {this.state.name}
            </a>
        )
    }
}
