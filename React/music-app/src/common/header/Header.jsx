import React, { Component } from 'react';
import './header.styl';

class Header extends Component {
  state = {  }
  handleback = () => {
    // 路由导出来的
    // if(this.props.history) {
    //   this.props.history.pop();
    // }
    window.history.back();
  }
  render() { 
    return (
      <div className="music-header"> 
        <span className="header-back" onClick={this.handleback}>
          <i className="icon-back"></i>
        </span>
        <div className="header-title">
          { this.props.title }
        </div>
      </div>
    );
  }
}
 
export default Header;