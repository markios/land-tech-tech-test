export default (dispatch) => ({
  increment: (amount) => dispatch({ type: 'increment', amount: amount || 1 }),
  decrement: (amount) => dispatch({ type: 'decrement', amount: -(amount || 1) })
});
