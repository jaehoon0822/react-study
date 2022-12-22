import React, { Component } from 'react'

export default class ScrollBox extends Component {
    outerBox = React.createRef();
    scrollToBottom = () => {
        console.log("눌림?");
        const { scrollHeight, clientHeight } = this.outerBox.current;
        this.outerBox.current.scrollTop = scrollHeight - clientHeight;
    }
  render() { 
    const style = {
        border: "1px solid black",
        height: "300px",
        width: "300px",
        overflow: "auto",
        position: "relative",
    };
    const innerStyle = {
        width: "100%",
        height: "650px",
        background: "linear-gradient(white, black)",
    };
    return (
    <div
        style={style}
        ref={this.outerBox}
    >
        <div style={innerStyle} />
    </div>
    )
  }
}
