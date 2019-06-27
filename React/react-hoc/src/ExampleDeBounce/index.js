import React, { Component } from 'react';
import { debounce, decDebounce, decArrowDebounce, decDisplayName } from './util' 

@decDisplayName('CustomExampleDebounce')
class ExampleDeBounce extends Component {
  state = {  }
  // handleSubmit = debounce(function() {
  //   console.log('request submit');
  // }, 1000)
  @decDebounce(1000)
  handleSubmit () {
    console.log('submit request');
  }
  @decArrowDebounce(1000)
  handleBuy = () => {
    console.log('buy now');
  }
  render() { 
    console.log(this.handleSubmit);
    console.log(this.handleBuy);
    return ( 
      <div>
        <button onClick={this.handleSubmit}>提交</button>
        <button onClick={this.handleBuy}>立即购买</button>
      </div>
     );
  }
}
 
export default ExampleDeBounce;