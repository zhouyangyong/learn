import React from 'react';

class Child extends React.Component {
  state = {
    childCount: 0
  }
  handleChildCountChange = () => {
    let {childCount} = this.state;
    childCount++;
    this.setState({
      childCount
    })
  }
  componentWillMount () {
    console.log('componentWillMount');
  }
  componentDidMount () {
    console.log('componentDidMount');
    this.interval = setInterval(() => {
      console.log('child setInterval')
    }, 1000)
  }
  // props 更新
  componentWillReceiveProps () {
    console.log('componentWillReceiveProps');
  }
  // 组件 性能优化的时候需要的，控制不必要的更新
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate');
    if (nextProps.count !== this.props.count) {
      return true;
    }
    return true;
  }
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate');
  }
  componentWillUnmount () {
    clearInterval(this.interval);
    console.log('componentWillUnmount');
  }
  render () {
    const {count} = this.props;
    const {childCount} = this.state;
    console.log('rende function');
    return (
      <div>
        <button onClick={this.handleChildCountChange}>child state change</button> <br/>
        childCount: {childCount} <br/>
        child Component <br/>
        count: {count}
      </div>
    )
  }
}

export default Child;