import React, { Component } from 'react';
const context = React.createContext();

class A extends Component {
  state = {  
    store: 1
  }
  render() { 
    const { store } = this.state;
    return (
      <div>
        <context.Provider value={store}>
          <B />
          {/* <C /> */}
        </context.Provider>
      </div>
    );
  }
}

function B() {
  return <C />
}

class C extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <context.Consumer>
          {
            (store) => {
              return <h2>{store}</h2>
            }
          }
        </context.Consumer>
      </div>
    );
  }
}
 
export default A;