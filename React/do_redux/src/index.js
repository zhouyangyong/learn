import { appState } from './redux/state';
import { storeChange } from './redux/storeChange';
import { createStore } from './redux/creaeteStore';

const { store, dispatch, subscribe } =  createStore(appState, storeChange);

// 管理状态，修改
// function dispatch(state, action) {
//   // 状态的修改是可预期的
//   switch(action.type) {
//     case 'HEAD_COLOR':
//       state.head.color = action.color;
//       break;
//     case 'BODY_TEXT': 
//       state.body.text = action.text;
//       break;
//     default:
//       break;
//   }
// }

function renderHead(state) {
  console.log('render head');
  // 两个函数组件
  const head = document.getElementById('head');
  head.innerText = state.head.text;
  head.style.color = state.head.color;
  // 随意的修改
  // state.body.text = '我是经过 head修改的body'
  
  // dispatch('BODY_TEXT');
}

function renderBody(state) {
  console.log('render body');
  const body = document.getElementById('body');
  body.innerText = state.body.text;
  body.style.color = state.body.color;
}

function renderApp(state, oldState = {}) {
  if (state === oldState) return; 
  state.head !== oldState.head && renderHead(state); // newState
  state.body !== oldState.body && renderBody(state); // oldState
}

subscribe((store, oldStore) => renderApp(store, oldStore));
renderApp(store);
dispatch({type: 'BODY_TEXT', text: '我是经过 head修改的body'})
// renderApp(store); // 性能开销太大
