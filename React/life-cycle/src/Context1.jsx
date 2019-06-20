import React from 'react'
// 返回一个对象 两个组件
const ThemeContext = React.createContext({
  theme: 'red',
  toggleTheme: () => {

  }
})

class MyButton extends React.Component {
  render () {
    return (
      <ThemeContext.Consumer>
        {
          (value) => {
            return (
              <button onClick={value.handleToggleGrey} style={{backgroundColor: value.theme}}>
                { this.props.children }
              </button>
            )
          }
        }
      </ThemeContext.Consumer>
    )
  }
}

class Message extends React.Component {
  shouldComponentUpdate () {
    return false;
  }
  render() {
    return (
      <div>
        {this.props.text}
        <MyButton>delete</MyButton>
      </div>
    )
  }
}

class Context1 extends React.Component {
  constructor () {
    super();
    this.handleToggleGrey = () => {
      this.setState(
        state => {
          return {
            theme: 'grey'
          }
        }
      )
    }
    this.state = {
      theme: 'blue',
      handleToggleGrey: this.handleToggleGrey
    }
  }
  // state = {} static 属性
  handleToggleTheme = () => {
    this.setState({
      theme: 'green'
    })
  }
  render () {
    const msgs = ['msg1', 'msg2', 'msg3'];

    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          {
            this.props.children
          }
          <button onClick={this.handleToggleTheme}>toggle theme</button>
          {
            msgs.map((msg, i) => {
              return <Message key={i} text={msg} />
            })
          }
        </ThemeContext.Provider>
      </div>
    )
  }
} 

export default Context1;