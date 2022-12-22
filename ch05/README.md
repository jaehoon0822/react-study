# ref 란?

`ref` 란 `HTML` 상의 `id` 같은 녀석이다.
`react` 의 `component` 상에서 `id` 를 사용해도 되지만,  
 이는 추천하지는 않는다.

`id` 가 협업을 통해 중복 사용되어, `unique` 한 값이 되지  
 않은 위험이 있기 때문이다.

그러므로, `component` 상에서 사용가능한 `identifier` 가 필요하다.  
 `component` 에서 사용가능한 `identifier` 가 바로 `ref` 이다.  
 `ref` 는 전역적으로 사용되지 않으며, `compoent` 내부에서만 작동한다.

실제로 `ref` 는 `reference` 의 줄임말로써, `참조` 라는 의미이다.

> \*대체 **_어떤_** 작업을 할 때 `ref` 를 사용해야 할까요? 정답은 `DOM` 을 꼭 건드려야 할때 입니다.\*
>
> 참고: **_p143_**

```css
.success {
  background-color: lightgreen;
}
.failure {
  background-color: lightcoral;
}
```

```jsx
import React, { useState } from "react";
import "./ValidationSample.css";

function ValidationSample() {
  const [validate, setValidate] = useState({
    password: "",
    clicked: false,
    validated: false,
  });
  const handleChange = (e) => {
    console.log(validate);
    setValidate({
      password: e.target.value,
    });
  };
  const handleButtonClick = () => {
    console.log(validate);
    setValidate({
      clicked: true,
      validated: validate.password === "000",
    });
  };
  return (
    <div>
      <input
        type="text"
        value={validate.password}
        placeholder="비밀번호를 입력해주세요."
        onChange={handleChange}
        className={
          validate.clicked ? (validate.validated ? "success" : "failure") : ""
        }
      />
      <button onClick={handleButtonClick}>확인</button>
    </div>
  );
}

export default ValidationSample;
```

> `ref` 를 사용하는 방법은 콜백함수를 통한 `ref`설정이 있고,  
> `createRef` 를 통한 설정이 있다.

`ref` 콜백함수는 `<input ref={(ref) => {this.input = ref}}>` 형식으로 받아 사용한다.

`createRef` 는 `input = React.createRef()` 으로 만든이후,
`<input ref={this.input}>` 으로 사용한다.

즉, 변수에 `ref` 에 할당하여, `ref props` 로 전달한다.

`createRef` 로 만든 `ref` 를 참조시 다음처럼  
`this.input.current` 를 사용하면, 해당 요소에 접근 가능하다.

```jsx
import React, { useState } from "react";
import "./ValidationSample.css";

const ValidationSample = () => {
  const input = React.createRef();
  const [validate, setValidate] = useState({
    password: "",
    clicked: false,
    validated: false,
  });
  const handleChange = (e) => {
    console.log(validate);
    setValidate({
      password: e.target.value,
      clicked: false,
      validated: false,
    });
  };
  const handleButtonClick = () => {
    console.log(validate);
    setValidate({
      password: "",
      clicked: true,
      validated: validate.password === "000",
    });
    input.current.focus();
  };
  return (
    <div>
      <input
        type="text"
        value={validate.password}
        placeholder="비밀번호를 입력해주세요."
        onChange={handleChange}
        className={
          validate.clicked ? (validate.validated ? "success" : "failure") : ""
        }
        ref={input}
      />
      <button onClick={handleButtonClick}>확인</button>
    </div>
  );
};

export default ValidationSample;
```

`ref` 를 컴포넌트에 사용했을 때이다.

```jsx
import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  scrollBox = React.createRef();
  render() {
    return (
      <>
        <ScrollBox ref={this.scrollBox} />
        <button onClick={() => this.scrollBox.current.scrollToBottom()}>
          맨 밑으로
        </button>
      </>
    );
  }
}

export default App;
```

여기서 중요한것은, `ref` 를 통해 가져온 `scrollToBottom` 을 호출할때,
`onClick={this.scrollBox.current.scrollToBottom}` 으로 호출하면 `Error` 가 발생한다.
처음에 책을 끝까지 안보고 구현해 보았을때, 왜 안되는지 한참을 고생했다.

책의 말미에 이유가 나와있다.

> _문법상으로 `onClick={this.scrollBox.scrollToBottom}` 같은 형식으로 작성해도  
> 틀린것은 아닙니다. 하지만 컴포넌트가 처음 렌더링될 때는 `this.scrollBox` 값이 `undefined` 이므로  
> `this.scrollBox.scrollToBottom` 값을 읽어오는 과정에서 오류가 발생합니다._
>
> 참고: **_p155_**

내가 이해하기로는 `App` 컴포넌트를 처음 `rendering` 시 `ScrollBox` 는 `rendering` 되지 않은  
상황이므로, `ref` 값은 `undefined` 이다.
즉, `onClick={this.scrollBox.scrollToBottom}` 일때는 값이 할당되므로  
`onClick={undefined}` 와 같다.

하지만 `onClick={() => {this.scrolLBox.current.scrollToBottom()}}` 으로 작성하면,
값 할당이 아닌 `함수` 로써 작성되기 때문에 `rendering` 된 이후 참조하여 불러올수 있다는것으로 이해된다.
