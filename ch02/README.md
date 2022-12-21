# JSX란? 

> `jsx` 문법은 `html` 과 유사하지만, `template engine` 처럼 `javascript` 문법을 사용하여, 프로그래밍적으로 작성 가능한 `react` 에서 `rendering` 하기 위한 문법이다.

> `jsx` 는 `create-react-app` 에서 내부적으로 사용되는 `webpack` 에서  `babel-loader` 를 통해 컴파일이 진행된다. 이때 `babel-loader` 는 브라우저에서 범용적으로 많이 사용되는 `es5` 의 `javascript` 로 변환된다.

`jsx` 는 `xml` 처럼 생겼으며, `html` 문법을 알고 있다면, 쉽게 접근 가능하기에 금새 익히기 좋다.

# JSX 문법

## 감싸인 요소

```jsx
import react from 'react';

export default function app() {
    return (
        <h1>hello</h1>
        <h1>react</h1>
    ); // error
}
```

`jsx` 는 항상 요소를 감싸주어야 한다.
다음을 보자

```jsx
import react from 'react';

export default function app() {
    return (
        <div>
            <h1>hello</h1>
            <h1>react</h1>
        </div>
    );
}
```

이렇게 감싸주는 방식이 DOM 트리의 컴포넌트 변화를 더 쉽게 감지할 수 있어서
이렇게 컴포넌트 단위를 하나로 그룹화 시켜준다고 한다.

이는 `<Fragment>` 를 사용해서 감싸주어도 동일하다.

```jsx
import react, { Fragment } from "react";

export default function app() {
    return (
        <Fragment>
            <h1>hello</h1>
            <h1>react</h1>
        </Fragment>
    );
}
```

이를 더 쉽게 하기 위해 다음처럼 표현하기도 한다.

```jsx
import react, { Fragment } from "react";

export default function app() {
    return (
        <>
            <h1>hello</h1>
            <h1>react</h1>
        </>
    );
}
```

매우 편리하구만!!

## 자바스크립트 표현

자바스크립트 표현시 `{}` 을 사용하여 내부에 자바스크립트 문법을 사용하면 된다.
책에서는 `if 문 대신 삼항연산자` 를 쓰기를 권장한다.
이러한 테크닉은 책에 잘 나와 있으니 넘어간다.

## NULL 그리고 False

`null` 값을 반환하면 아무것도 렌더링 되지 않는다.
이는 `false` 도 마찬가지이다.

## undefined

`undefined` 를 반환하면 안된다.
`react` 에서는 `Error` 가 발생한다.

```jsx

const App = () => {
    const un = undefined;
    return un || "undefined 가 있네!!"; // Error
};

export default App;

```

하지만 `jsx` 내부에 `undefined` 를 쓰는것은 허용한다.
`undefined` 가 있다면 `jsx` 내부에서는 아무것도 없는 값으로 취급한다.

`undefined` 사용하는 코드의 예시는 다음과 같다.

```jsx
const App = () => {
    const un = undefined;
    return (
        <>
        { un || "undefined 가 있네!!" }
        </>
    )
};

export default App;
```

## 인라인 스타일링   

`css` 를 `inline` 으로 작성시 `camelCase` 를 사용한다.
`background-size` 는 `backgroundSize` 이다.

`css` 를 `inline` 으로 작성시 `Object` 로 감싼후 `jsx style` 에 할당 가능하다.
다음을 보자

```jsx
const App = () => {
    const content = "Hello Box";
    const style = {
        boxSizing: "border-box",
        width: "100px",
        height: "100px",
        padding: "1em",
        backgroundColor: "#ddd" 
    };
    return (
        <div style={{style}}>
            { content }
        </div>
    );
};
```

굉장히 편하고 좋다.

## className

요소의 `class` 를 지정할때도 `className` 으로 한다.

## 태그는 닫는다.

`jsx` 에서는 `tag` 를 `closed` 하지 않으면, `error` 가 발생한다.  
이는 `<input>` 역시 마찬가지이며 `<input>` 은 `<input />` 으로 꼭 닫아준다.

## 주석

주석은 `{* comment *}` 형식으로 작성한다.
또한, `시작태그` 를 여러줄로 작성하면, 해당 줄 내부에서는 `// comment`  
형식을 사용가능하다.

# ESLint 와 Prettier

