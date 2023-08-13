// Here i created simple arrow function in javascipt 
import { useSelector } from "react-redux";
import React from 'react';
const App = () => {
    
    const count = useSelector((state) => state.count);
    console.log(count);

    return (
        // everything written inside return is not html but it's JSX 
        <div>
            <h3>Hello World</h3>
        </div>
    );

}

export default App;