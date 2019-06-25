module.exports = function(state = ['nba'], action) {
  switch (action.type) {
    case 'ADD_FILM':
      return [{
        id: action.id,
        name: action.name,
        mm: 'fdjk'
      },...state];
    case 'DELETE_FILM' :
      return state.filter(film => film.id !== action.id)

    default:
  }
  return state;
}
