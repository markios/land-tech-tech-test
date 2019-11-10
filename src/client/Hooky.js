import React, {useMemo, useReducer} from 'react';
import reducer from '../state/reducer';
import actions from '../state/actions';
import useActions from '../state/useActions';
import {useFetch} from '../state/useFetch';

function useSelectors(reducer, mapStateToSelectors) {
  const [state] = reducer;
  const selectors = useMemo(() => mapStateToSelectors(state), [mapStateToSelectors, state]);
  return selectors;
}

function Example() {
  const counterReducer = useReducer(reducer, {count:0});
  const { increment, decrement } = useActions(counterReducer, actions);
  const [data, loading, failed] = useFetch('https://randomuser.me/ap');

  const { getCount, getDividedBy } = useSelectors(counterReducer, (state) => ({
    getCount: () => state.count,
    getDividedBy: (amount) => state.count / amount
  }));

  return (
    <div>
      <p>Loading = {loading ? 'true' : 'false'}</p>
      {failed && 
        <p>Failed to load</p>
      }
      <p>Current count is {getCount()} and divided by two: {getDividedBy(2)}</p>
      <button onClick={() => increment(1)}>+</button>
      <button onClick={() => decrement(1)}>-</button>
    </div>
  )
}

export default Example;