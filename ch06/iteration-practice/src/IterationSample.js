import React, { useState } from 'react'

const IterationSample = () => {
    const [ names, setNames ] = useState([
      {id: 1, text: "눈사람"},
      {id: 2, text: "얼음"},
      {id: 3, text: "눈"},
      {id: 4, text: "바람"},
    ]);
    const [ inputText, setInputText ] = useState("");
    const [ nextId, setNextId ] = useState(5);
    const nameList = names.map(( name ) => <li 
      key={name.id}
      onDoubleClick={() => onDoubleClick(name.id)}
    >{name.text}</li>);
    const onChange = e => setInputText(e.target.value);
    const onDoubleClick = id => {
      const newNames = names.filter( name => name.id !== id );
      setNames(newNames);
    };
    const onClick = () => {
      const newNames = [
        ...names,
        {id: nextId, text: inputText},
      ];
      setNames(newNames);
      setNextId(nextId + 1);
      setInputText("");
    }
  return (
    <>
      <ul>
          { nameList }
      </ul>
      <div>
          <input 
              type="text" 
              placeholder="이름을 입력해 주세요."     
              value={inputText}
              onChange={onChange}
          />
          <button
            onClick={onClick} 
          >추가</button>
      </div>
    </>
  )
}

export default IterationSample;