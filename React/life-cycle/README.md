## 挂载阶段
第一次渲染
componentWillMount
componentDidMount

## 更新阶段
shouldComponentUpdate
true 更新
false 不更新

componentWillUnmount
清理：定时器 / 全局的时间绑定 

## red blue
// 父组件 state
{
  theme: 'red'
}
层层传递
父组件 -> 子组件 -> 孙子组件
yarn add prop-types -S 
1. 父组件 通过 getChildContext 返回提供的 context 内容
2. 父组件 .childContextTypes 定义提供的 context 类型
3. 子组件 获取 .contextTypes 定义接受的类型 通过 this.context 获取

问题：
跨层级传递的时候，假如中间某一组件，shouldComponentUpdate return false 了之后
导致 后代不会更新 context 的数据不能同步

16.xxx
1. 构造 Provider Consumer
2. 父组件 <Provider value={} /> 提供数据
3. 后代组件 <Consumer>{ () => {} }</Consumer> 获取数据

state = {
  theme: 'blue',
  toggle: this.handleToggleTheme
}
静态属性 无法获取 实例的 this 