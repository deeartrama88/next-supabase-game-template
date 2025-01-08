'use client';

import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import type { Dispatch, RootState } from '@/store';

export default function ReduxCounter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<Dispatch>();

  return (
    <div>
      <p>Count: {count}</p>
      <Button variant="contained" onClick={() => dispatch.counter.increment()}>
        Increment
      </Button>
      <Button onClick={() => dispatch.counter.decrement()}>Decrement</Button>
      <Button onClick={() => dispatch.counter.incrementBy(5)}>Add 5</Button>
      <Button onClick={() => dispatch.counter.incrementAsync()}>Increment Async</Button>
    </div>
  );
}
