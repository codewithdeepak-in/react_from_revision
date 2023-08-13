import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
    const counter = useSelector((state) => state.counter.list);

    return (
        <div>
            <h1>Hello World!</h1>
            <hr />
            <div style={{textAlign: 'left'}}>
                <ol>
                    {counter.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default App;
