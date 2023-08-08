/*
    
useReducer is a hook in React that is used for state management. It's an alternative to the useState hook and provides a way to manage complex state logic in a more organized and scalable manner. useReducer is especially useful when dealing with state transitions that involve multiple actions and have more intricate logic.

Creating a Reducer:
A reducer is a function that takes the current state and an action as arguments and returns the new state based on the action. The reducer defines how the state changes in response to different actions.

const initialState = '';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
            break;
        case 'DECREMENT':
            return state - 1;
            break;
        default:
            return state;
    }
}

Use Reducer 
    const [state, dispatch] = useReducer(reducer, initialState);


dispatch({type: 'INCREMENT'})


*/

import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return { count: state.count  + 1};
   
        case 'DECREMENT':
            return { count: state.count  - 1};
      
        default:
            return state;
    }
}

// This is the reducer function take takes two arguments first one is state and the second one reducer.


const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);



    return(
        <div>
            <h3>
                Let's UnderStand the UseReducer function in details.
            </h3>

            {state.count}
            <button onClick={(e) => dispatch({ type: 'INCREMENT'})}>
                Increment
            </button>
            <button onClick={(e) => dispatch({ type: 'DECREMENT'})}>
                Decrement
            </button>

        </div>
    )

}

export default UseReducer;