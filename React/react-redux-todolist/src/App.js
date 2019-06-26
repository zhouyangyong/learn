import React from 'react';
import AddTo from './todo/AddTo';
import TodoList from './todo/TodoList';
import Filter from './todo/Filter';

function App() {
  return (
    <div>
      <AddTo />
      <TodoList />
      <Filter />
    </div>
  );
}

export default App;
