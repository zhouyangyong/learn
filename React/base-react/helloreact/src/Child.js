import React, { Component } from 'react';
class Child extends Component {
  state = {}
  handleAnotherFun = () => {
    console.log('handleAnotherFun');
  }
  handleClick (e) {
    console.log(this);
    this.handleAnotherFun();
    // console.log(e);
    console.log(e.target.innerHTML);
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      inputVal: e.target.value
    })
    console.log(this.state.inputVal);
  }
  render() { 
    return (
      <div onClick={this.handleClick.bind(this)}>
        { this.props.msg }
        <input type="text" value={this.state.inputVal} placeholder="请输入内容" onChange={this.handleChange} />
      </div>
    )
  }
}

export default Child;