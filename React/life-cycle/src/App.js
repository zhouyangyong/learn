import React from 'react';
import Child from './Child';
import Child1 from './Child1';
import './App.css';

class App extends React.Component {
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
  render () {
    const {count, showChild} = this.state;
    return (
      <div>
        <button onClick={this.handleChildPropsChange}>child component props change</button> <br/>
        <button onClick={this.handleToggleChild}>toggle child</button>
        {
          !showChild ? <Child count={count} /> : <Child1 count={count} />
        }   
      </div>
    )
  }
}

export default App;
