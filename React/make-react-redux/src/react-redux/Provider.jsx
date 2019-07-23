import React, { Component } from 'react';
import { Provider } from './context';

class EnhanceProvider extends Component {
  constructor (props) {
    super(props);
    const { store } = this.props;
    this.state = {
      state: store.getState(),
      dispatch: store.dispatch
    }
    store.subscribe(() => {
      this.setState({
        state: store.getState()
      })
    })
  }
  state = {  }
  render() { 
    const { state, dispatch } = this.state;
    return (
      <div>
        <Provider value={{state, dispatch}}>
          {
            this.props.children
          }
        </Provider>
      </div>
    );
  }
}
 
export default EnhanceProvider;