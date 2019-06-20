import React from 'react';
import Child from './Child';
import Child1 from './Child1';
import Context from './Context';
import Context1 from './Context1';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    this.objRef = React.createRef();
  }
  state = {
    count: 0,
    showChild: true
  }
  handleToggleChild = () => {
    const {showChild} = this.state;
    this.setState({
      showChild: !showChild
    })
  }
  handleChildPropsChange = () => {
    let {count} = this.state;
    count++;
    this.setState({
      count
    })
  }

  componentDidMount () {
    this.refs.stringRef.innerHTML = 'new String Ref';
    this.methodRef.innerHTML = 'new Method ref';
    this.objRef.current.innerHTML = 'new Object ref';
  }
  render () {
    const {count, showChild} = this.state;
    return (
      <div>
        <span ref="stringRef">react ref</span> <br/>
        <span ref={(ref) => this.methodRef = ref}>method ref</span> <br/>
        <span ref={this.objRef}>object ref</span> <br/>
        {/* innerHTML */}
        <div dangerouslySetInnerHTML={{
        __html: `<strong>strong</strong>`
        }}>

        </div>

        <button onClick={this.handleChildPropsChange}>child component props change</button> <br/>
        <button onClick={this.handleToggleChild}>toggle child</button>
        {
          !showChild ? <Child count={count} /> : <Child1 count={count} />
        }   

        {/* 小华 */}
        <Context>
          <p>姓名：</p>
          小华
          <p>年龄：</p>
          19
        </Context>
        <Context1>
          <p>react 16.x.x</p>
       </Context1>
      </div>
    )
  }
}

export default App;
