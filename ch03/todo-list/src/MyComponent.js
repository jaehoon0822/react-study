import React, { Component } from "react";

export default class MyComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    render() {
        const { count } = this.state;
        return (
        <button
            onClick={() => {
                this.setState((prevState) => 
                    ({ count: prevState.count + 1 }),
                );
                this.setState((prevState) =>
                    ({ count: prevState.count + 1 }),
                );
            }} 
        >{count}</button>
        );
  }
}