import React from 'react';
import logo from './logo.svg';
import ExampleMobx from './exampleMobx/index'
import LoginStatus from './LoginStatus';
import ShopCart from './ShopCart';
import WithLogin from './WithLogin';
import './App.css';
import exampleBase from "./examplebase/index"
import ExampleDebounce from './ExampleDeBounce/index'
// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart);
function App() {
  return (
    <>
      <LoginStatus />
      <ShopCart />
      <ExampleMobx></ExampleMobx>
      <ExampleDebounce></ExampleDebounce>
      {/* <WithLoginStatus />
      <WithShopCart a="1" b="2"/> */}
      <exampleBase />
    </>
  )
}

export default App;