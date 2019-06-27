import React from 'react';
import LoginStatus from './LoginStatus';
import ExampleMobx from './exampleMobx/index';
import ShopCart from './ShopCart';
import WithLogin from './WithLogin';
import ExampleBase from './examplebase/index'

// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart);

function App() {
  return (
    <>
    <ExampleMobx />
    <LoginStatus />
    <ShopCart a="1" b="2" />
      {/* <WithLoginStatus />
      <WithShopCart a="1" b="2" /> */}
      <ExampleBase />
    </>
  );
}

export default App;
