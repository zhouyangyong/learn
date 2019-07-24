import React from 'react';
import './App.css';
// import ConcurrentModeDemo from './ConcurrentMode/index';
import StateHook from './hook/stateHook';
import PrepareForEffectHook from './hook/prepareForEffectHook';
import EffectHookDemo from './hook/effectHook';
import ReducerHook from './hook/ReducerHook';

function App() {
  return (
    <div className="App">
      {/* <ConcurrentModeDemo></ConcurrentModeDemo> */}
      <StateHook />
      <PrepareForEffectHook />
      <EffectHookDemo />
      <ReducerHook />
    </div>
  );
}

export default App;
