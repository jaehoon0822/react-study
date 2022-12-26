import React, { useState } from "react";
import LifeCycleSample from './LifeCycleSample';

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function App() {
  const [ randomColor, setRandomColor ] = useState("#000000")
  const handleClick = () => {
    setRandomColor(getRandomColor());
  }
  return (
    <>
      <LifeCycleSample color={ randomColor }/> 
      <button
        onClick={ () => handleClick() } 
      >색상변경</button>
    </>
  );
}

export default App;
