import {useMemo} from 'react';

export default function useActions(reducer, mapDispatchToActions) {
  const [, dispatch] = reducer;
  const actions = useMemo(() => mapDispatchToActions(dispatch), [dispatch, mapDispatchToActions]);
  return actions;
}
