// Here i created simple arrow function in javascipt 
import { useSelector } from "react-redux";
// In a Redux-based application, the useSelector hook is a part of the "react-redux" library, and it serves as a bridge between your React components and the Redux store. Its primary purpose is to allow functional components to access the state stored in the Redux store and react to changes in that state.


import React from 'react';
import { increment , decrement } from "./store/count";
import { useDispatch } from 'react-redux';

const App = () => {
    
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
   

    return (
        // everything written inside return is not html but it's JSX 
        <div>
            <h3>Hello World</h3>
                <hr />
            {count.count}
            <br />
            <button onClick={() => dispatch(increment())}>+</button> 
            <button onClick={() => dispatch(decrement())}>-</button> 

        </div>
    );

}

export default App;