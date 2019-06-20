import React from 'react';

class Child1 extends React.Component {
  state = {
    a: 1
  }
  handleStateChange = () => {
    this.setState({
      a: 10
    })
  }
  /**
   * 更新 state
   * 根据返回值 {}
   * null
   */
  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps', props);
    // return null;
    return {
      ...props,
      ...state
    }
  }
  componentDidMount () {
    console.log('componentDidMount');
  }

  shouldComponentUpdate () {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate () {
    console.log('getSnapshotBeforeUpdate');
    return 888;
  }
  // 15.xxx a === undefined
  // 16.xxx a === getSnapshotBeforeUpdate()
  componentDidUpdate (preProps, preState, a) {
    console.log('componentDidUpdate', a);  
  }
  render () {
    console.log('渲染时候 state', this.state);
    return (
      <div>
        <button onClick={this.handleStateChange}>change state</button>
        child1 Component <br/>
        count: { this.state.count }
      </div>
    )
  }
}

export default Child1;