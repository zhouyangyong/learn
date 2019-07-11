export const storeChange = (store, action) => {
  switch (action.type) {
    case 'HEAD_COLOR':
      // store.head.color = action.color;
      return {
        ...store,
        head: {
          ...action.head,
          color: action.color
        }
      }
    case 'BODY_TEXT':
      return {
        ...store,
        body: {
          ...store.body,
          text: action.text
        }
      }
    default:
      return {
        ...store
      }
  }
}