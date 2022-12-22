# Component

> `Component` 는 `App` 에서 사용할 작은 코드 단위라고 보면 된다.  
> 이렇게 분할하여 사용하면 관리하기 훨씬 간편한 장점이 있다.  
> `react` 는 레고처럼 각 컴포넌트를 조립하여 하나의 `page` 를 구현한다.

## Props

> `Props` 는 부모로부터 `Component` 에서 상속받는 객체라고 보면된다.

다음을 보자.

```jsx
import React from "react";
import Compo from "./Compo";

const App = () => {
  const content = "Hello React";
  return <Compo content={content} />;
};

export default App;
```

```jsx
import React from "react";

// { content } = props;
const Compo = ({ content }) => {
  return <div>{content}</div>;
};

export default Compo;
```

여기서 보면 `prop` 를 통해 `content` 를 자식 `component` 에게  
보내준다.

이러한 방식으로 `parent compoennt` 에서 `child component` 에게  
전달할 `data` 를 받아 처리할 수 있다.

만약 `prop` 의 `property` 에게 기본값을 설정하려면 다음처럼하면 된다.

```jsx

import React from 'react'

// { content } = props;
export default const Compo = ({ content }) => {
    return (
        <div>
            { content }
        </div>
    );
};

Compo.defaultProps = {
    content: "기본내용",
};

```

### Children

`props` 는 태그사이에 작성된 값을 `props.children` 을 통해 전달 가능하다/

```jsx
import React from "react";
import Compo from "./Compo";

const App = () => {
  const content = "Hello React";
  return <Compo content={content}>나는 children 이야</Compo>;
};

export default App;
```

```jsx

import React from 'react'

// { content } = props;
export default const Compo = ({ content, children }) => {
    return (
        <div>
            { content }{ /* Hello React */ } 
            { children } { /* 나는 children 이야  */ }
        </div>
    );
};

Compo.defaultProps = {
    content: "기본내용",
};

```

## State

> `Component` 내부에서 바뀔수 있는 값을 설정하는 값이다.

### class Component State

```jsx
import React, { Component } from 'react'

export default class Comp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    render() {
        const { number } = this.state;
        return (
        <button
            onClick={this.setState({
                count: count + 1,
                })} 
        >{number}</button>
        );
  }
}
