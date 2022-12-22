import React, { Component } from 'react'
import ScrollBox from "./ScrollBox"

class App extends Component {
  scrollBox = React.createRef();
  render() {
    return (
      <>
        <ScrollBox ref={this.scrollBox} />
        <button
            onClick={() => this.scrollBox.current.scrollToBottom()}
        >맨 밑으로</button>
      </>
    );
   };
}

export default App;
