// Function Component Introduced later than Class Component 
// In Functional Component We use Different Hooks and they 
// Perform different Functionalities 


// Let's Know how many types of Hooks Exists in React 

// 1. useState: Manage state in functional components.
// 2. useEffect: Perform side effects in functional components (e.g., data fetching, DOM manipulation).
// 3. useContext: Access the context of a parent component.
// 4. useReducer: An alternative to useState for managing complex state logic.
// 5. useMemo: Memoize values to optimize performance.
// 6. useCallback: Memoize functions to prevent unnecessary re-renders.
// 7. useRef: Access and manipulate the DOM directly.
// 8. useLayoutEffect: Similar to useEffect, but runs synchronously after all DOM mutations.
// 9. useImperativeHandle: Customize the instance value that is exposed when using React.forwardRef.
// 10. useDebugValue: Display a label for custom hooks in React DevTools.

// 1. useState

import React, { useState } from 'react';

const Second = () => {
    
    const [count, setCount] = useState({
        count: 0,
        keyword: ''
    });

    // useState is function that takes an argument as a initial value and returns an array of two element first is the value and second is function function for modifying the value.
    
    function handleClick(e){
        e.preventDefault();
        setCount({
            count: count.count + 1,
        });
    }


    return (
        <>
            <p>{count.count}</p>
            <button onClick={handleClick}>Click</button>

            <br />

            <p>{count.keyword}</p>
            <input type="text" onChange={(e) => setCount({...count, keyword: e.target.value })} />
        </>
    )


}


export default Second;
