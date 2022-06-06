// import './index.less';

if (module && module.hot) {
  module.hot.accept();
  class Animal {
    constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
  }

  const dog = new Animal('dog');

  console.log('aaa');
}
