import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    // v16.3 이후부터는 UNSAFE_componentWillMount() 라는 이름으로 사용됩니다.
    console.log('componentWillMount (deprecated)');
  }

  componentDidMount() {
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return false 하면 업데이트를 안함
    // return this.props.checked !== nextProps.checked

    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    // 이 API 또한 v16.3 이후 deprecate 됩니다.
    // 기존의 기능은 getSnapshotBeforeUpdate 로 대체 될 수 있습니다.
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    // 이 API는 컴포넌트에서 render() 를 호출하고난 다음에 발생하게 됩니다.
    // 이 시점에선 this.props 와 this.state 가 바뀌어있습니다.
    // 그리고 파라미터를 통해 이전의 값인 prevProps 와 prevState 를 조회 할 수 있습니다. 
    // 그리고, getSnapshotBeforeUpdate 에서 반환한 snapshot 값은 세번째 값으로 받아옵니다.
    console.log('componentDidUpdate');
  }


  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    );
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
