import React, { Component } from "react";
import MyComponent from './MyComponent'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <h1>카운트</h1>  
        <MyComponent />
      </>
    );
  }
}

export default App;
