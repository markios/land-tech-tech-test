
export default function reducer(state = { count: 0 }, action) {
  switch(action.type) {
    case 'increment':
    case 'decrement':
      return { count: state.count + action.amount };
    default:
      return state;
  }
}
