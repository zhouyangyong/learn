// [
//   {
//     id: '',
//     text: '',
//     complete: ''
//   }
// ]

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: action.completed || false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (action.id === todo.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo;
      })
    default: 
      return state;
  }
}