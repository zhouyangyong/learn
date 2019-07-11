export const createStore = (state, storeChange) => {
  const listeners = []; // 页面的组件都在这里
  const store = state || {};
  // listen 是一个 callback 
  const subscribe = (listen) => listeners.push(listen) // 订阅发布者
  // const dispatch = (action) => storeChange(store, action);
  const dispatch = (action) => {
    const newStore = storeChange(store, action);
    listeners.forEach(item => {
      item(newStore, store);
    })
  }
  return { store, dispatch, subscribe };
}