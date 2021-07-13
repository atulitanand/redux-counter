import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement, increment, set } from './actions';
import SetCounter from './SetCounter';

export const Counter = () => {
  const incident = 'Incident';
  /**
   * useSelector
   *
   * one of the things that comes with redux
   *    - it gives you the state where ever you need it
   *    - and yeah you can't use store.getState() here so we have hooked into that
   *
   * its soul work is to parse the state tree and give back what we need
   */
  const count = useSelector((state) => state.count);
  /**
   * useDispatch
   *
   * thing that gives use a hook to store.dispatch object
   */
  const dispatch = useDispatch();

  const actions = bindActionCreators({ increment, decrement, set }, dispatch);

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => actions.increment()}>Increment</button>
        <button onClick={() => actions.set(0)}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
