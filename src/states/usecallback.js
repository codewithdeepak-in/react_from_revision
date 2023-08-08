import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={increment} />
    </div>
  );
}

function ChildComponent({ onIncrement }) {
  console.log('ChildComponent is re-rendered');
  return <button onClick={onIncrement}>Increment</button>;
}


export default ParentComponent;