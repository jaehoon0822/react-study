# Event

## `Event` 사용시 주의사항

. 이벤트 이름은 카멜케이스로 작성한다.
. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
. DOM 요소에만 이벤트 설정할 수 있다.

## `Event` 종류

. Clipboard
. Touch
. Composition
. UI
. Keyboard
. Wheel
. Focus
. Media
. Form
. Image
. Mouse
. Animation
. Selection
. Transition

> [리액트 이벤트](https://reactjs.org/docs/events.html) 를 살펴보도록 하자.

## `onChange`를 써보아요.

```javascript
import React, { Component } from 'react'

export default class EventPractice extends Component {
    state = {
        message: "",
    };
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({
            message: e.target.value, 
        });
    }
    handleClick() {
        alert(this.state.message);
        this.setState({
            message: "",
        });
    }
    render() {
        return (
            <>
                <div>이벤트 연습</div>
                <p>{this.state.message}</p>
                <input 
                    type="text"
                    name="message"
                    placeholder='아무거나 입력해 보세요'
                    value={this.state.message}
                    onChange = { this.handleChange }
                />
                <button
                    onClick={ this.handleClick } 
                >확인</button>
            </>
        )
    }
}
```
> 여기서 `constructor` 를 보면 `bind` 를 통해 `class` 와 묶어준다.
이유는 `function` 의 호출 특성 때문이다.
`function ` 의 `this` 는 호출시 결정되기 때문에, 위에서 `render` 함수를 호출하여 `html` 코드 작성시 `class` 의  `this` 에 대한 연결이 끊어진다.
>
> 실제로, `constructor` 에 `bind` 를 없앤후, 작동시키면 `this` 가 `undefined` 라고 하며 `error` 가 발생한다.
>
>이는 `class` 컴포넌트를 사용할때 꼭 알아 두어야 하는 개념이다.

## Property Initializer Syntax 

> 이는 `babel` 로 `transform-class-properties` 문법을 사용하여, 화살표함수로 변형하는 것을 말한다.
>
> 즉 `function` 이 아닌 `arrow function` 으로 선언하는 것이다.
> 
> `arrow function` 은 `Lexical this` 를 가진다.
그러므로 `호출시 자신이 정의된 환경의 this` 를 `계승` 받는다.
> 
> 즉, `transform-class-properties` 는 `arrow-function` 으로 적어도 되도록 만들어주는 `transpiler`  의 `preset` 이다.

```jsx
import React, { Component } from 'react'

export default class EventPractice extends Component {
    state = {
        message: "",
    }
    handleChange = (e) => {
        this.setState({
            message: e.target.value, 
        });
    }
    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: "",
        });
    }

    render = () => {
        return (
            <>
                <div>이벤트 연습</div>
                <p>{this.state.message}</p>
                <input 
                    type="text"
                    name="message"
                    placeholder='아무거나 입력해 보세요'
                    value={this.state.message}
                    onChange = { this.handleChange }
                />
                <button
                    onClick={ this.handleClick } 
                >확인</button>
            </>
        )
    }
}
```
바인드로 묶어줄 필요가 없어진다.

## onKeypress deprecated 
> `onKeypress` 는 `deprecated` 되었다.
> 대신 `onkeyDown` 을 사용하면 된다.

> `onKeyDown` 은 `한/영` 키 및 `Print Screen` 을 제외한 나머지 문자를 키보드로 입력했을때, 해당 키 값을 `event` 의 `key`, `charCode`, `keyCode` 속성을 사용하여 입력한 값을 받을 수 있다.
>
>`Enter` 를 눌렀을때, `event.key` 는 `"Enter"` 문자열이며,
`event.charCode` 는 `Enter` 의 `ASCII 문자` 인 `13` 숫자를 나타낸다.
> 
> `keyboard` 에서 누르는 모든 속성은 해당 숫자를 가진다.
`event.keyCode` 는 `Enter` 의 `Keyboard code` 인 `13` 숫자를 나타낸다.
>

```jsx
import React, { Component } from 'react'

export default class EventPractice extends Component {
    state = {
        username: "",
        message: "",
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value, 
        });
    }
    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: "",
            username: "",
        });
    }
    handleKeyDown = (e) => {
        if (e.key === "Enter") {
            this.handleClick()
        }
    }

    render = () => {
        return (
            <>
                <div>이벤트 연습</div>
                <p>{this.state.message}</p>
                <input 
                    type="text"
                    name="message"
                    placeholder='아무거나 입력해 보세요'
                    value={this.state.message}
                    onChange = { this.handleChange }
                    onKeyDown={ this.handleKeyDown }
                />
                <br/>
                <input 
                    type="text"
                    name="username"
                    placeholder='아무거나 입력해 보세요'
                    value={this.state.username}
                    onChange = { this.handleChange }
                    onKeyDown={ this.handleKeyDown }
                />
                <br/>
                <button
                    onClick={ this.handleClick } 
                >확인</button>
            </>
        )
    }
}
```

## input form 관리

> `input` 이 2개면 괜찮지만 `input` 이 많아지면 불편해진다.
> 이때, 관리를 다음처럼 하면 좋다.

```jsx

import React, { useState } from 'react'

const EventPractice = () => {
    const [form, setForm] = useState({
        username: "",
        message: "",
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleClick = () => {
        setForm({
            username: "",
            message: "",
        });
    };
    const handleKeyDown = (e) => {
        if ( e.key === "Enter" ) {
            handleClick();
        }
    }
    return (
        <div>
            <h1>EventPractice</h1>
            <p>이름: {form.username}</p>
            <p>내용: {form.message}</p>
            <input 
                type="text"
                value={form.username}
                name="username"
                placeholder="이름을 입력해 주세요."
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <br/>
            <input 
                type="text"
                value={form.message}
                name="message"
                placeholder="내용을 입력해 주세요."
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            /><br/>
            <button
                onClick={handleClick} 
            >확인</button>
        </div>
    );
}

export default EventPractice;
```

`react Event` 는 `javascript DOM Event` 와 매우 유사하다.
`DOM Event` 를 알고 있다면, 금방 익숙해 질수 있다.