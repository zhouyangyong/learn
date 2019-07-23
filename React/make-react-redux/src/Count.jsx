import React, { Component } from 'react';
import connect from './react-redux/connect';

class Count extends Component {
  state = {}

  render() {
    const { count, appto, addCount, decCount } = this.props;
    console.log(this.props);
    return (
      <div>
        count: {count} <br></br>
        appto: {appto} <br></br>
        <button onClick={() => addCount(count)}>+</button>
        <button onClick={() => decCount(count)}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state
})

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: (count) => dispatch({
      type: 'INCREMENT',
      count
    }),
    decCount: (count) => dispatch({
      type: 'DECREMENT',
      count
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Count);