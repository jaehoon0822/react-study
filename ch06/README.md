# Iteration

`react` 는 `iteration` 이 가능하다
다음을 보면 쉽게 `jsx` 를 통해 태그를 만들 수 있다.

```jsx
import React from "react";
const items = ["item1", "item2", "item3", "item4"];
const lis = items.map((item) => <li>item</li>);

const IterationItems = () => {
  return <div>{lis}</div>;
};

export default README;
```

이렇게 `lis` 를 통해 `li` 태그를 만들어 자바스크립트 처럼 할당 가능하다.
이렇게 만들면 쉽게 반복되는 태그를 만들 수 있다.

하지만, 이렇게만 하면 분명 `Error` 가 발생한다.
이유는 `key` 가 없기 때문이다.

# key

> _`key` 는 컴포넌트 배열을 렌더링했을때 어떤 원소에 변동이 있었는지 알아내려고 사용합니다._ > **_중략_** > _`key` 가 있다면 이 값을 사용하여 어떤 변화가 일어났는지 더욱 빠르게 알아낼 수 있습니다._

위와 같은 이유라고 한다.
즉 배열로 있는 컴포넌트를 식별하기 위한 식별자를 지정한다고 생각한다.

```jsx
import React from "react";
const items = ["item1", "item2", "item3", "item4"];
const lis = items.map((item, idx) => <li key={idx}>item</li>);
// Error 가 발생하지 않는다

const IterationItems = () => {
  return <div>{lis}</div>;
};

export default README;
```

`key` 를 사용하여, 배열에 있는 컴포넌트가 변경될때, 효율적으로 리렌더링 되도록 해야 한다.

`react` 에서는 `mutable` 해야 한다.
그렇게 해야만 컴포넌트의 성능을 최적화 가능하다고 한다.

또한, 이러한 식별 가능한 `key` 값이 있다면, 쉽게 해당 요소를 선택하여 어떠한 처리가 가능하다.

`p169` 에 `input` 을 `doubleClick` 하여 삭제하는 부분이 나오는데, 함수상의 인자로 `id` 를 사용하여 해당 요소를 삭제한 후 `state` 를 다시 `set` 한다.

이는 많이 사용하는 `pattern` 일것 같다는 생각이다.