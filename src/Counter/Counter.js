import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default Counter;
