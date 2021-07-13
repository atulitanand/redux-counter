import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from './actions';

const SetCounter = () => {
  const countFromStore = useSelector((state) => state.count);
  const [val, setVal] = useState(countFromStore);
  const dispatch = useDispatch();

  useEffect(() => {
    setVal(countFromStore);
  }, [countFromStore]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(val));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={val}
          onChange={(e) => {
            e.preventDefault();
            setVal(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </section>
  );
};

export default SetCounter;
