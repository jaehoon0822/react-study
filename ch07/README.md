# Lifecycle

## Constructor
> 컴포넌트를 새로 만들때 마다 호출되는 생성자 메서드.

## getDerivedStateFromProps
> 인자: `nextProps`, `prevProps`
> `props` 에 있는 값을 `state` 에 넣을대 사용하는 메서드,

## shouldComponentUpdate
> 인자: `nextProps`, `nextState`
> 업데이트 이전에 리렌더링 할지 말지 결졍하는 메서드
> `true` 반환 시 `render` 호출, `false` 반환시 작업 취소

## render
> 컴포넌트를 리렌더링한다.

## getSnapshotBeforeUpdate
> 인자: `prevProps`, `prevState`
> 컴포넌트 변화를 `DOM` 에 반영하기 바로 직전에 호출되는 메서드
> `componentDidUpdate` 에 `snapshot` 인자로 내용을 보낸다.

## componentDidUpdate
> 인자: `prevProps`, `prevState`, `snapshot`
> 업데이트가 끝난 직후이므로, `DOM` 관련 처리를 해도 된다.

## componentWillUnmount 
> 컴포넌트를 `DOM` 에서 제거할때 실행한다.

## componentDidCatch 
> 인자: `error`, `info`
> 리액트 `V16`  에서 도입되었다. 랜더링 도중 `error` 발생시 `error UI` 를 보여준다.