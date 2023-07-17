import React, { useState } from 'react';

const CounterInput = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(value - 1)}>-</button>
      <input type="text" value={value} readOnly />
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  );
};

export default CounterInput;
