import { useState } from 'react';

const App = () => {

    const [list, setList] = useState([12,31,123]);    

    const createList = () => {
        return list.map((item, key) => (
          <li key={key}>{item}</li>
        ))
    }

    const addNumber = () => {
        setList([...list, 
                Math.floor(Math.random() * 100)
        ])

    }
    let a = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let c = Math.floor(Math.random() * 255)
    
    const removeNumber = () => {
        const listarray = [...list];

        listarray.pop();
        setList(listarray);
    }


    return (
        <div>
            <h1>Hello World!</h1>
            {createList()}

            <button onClick={addNumber} > Add</button>
            <button onClick={removeNumber} > Remove</button>
            <br />
            <br />
            <div style={{height: '100px',backgroundColor: `rgba(${a}, ${b}, ${c})`}}></div>
        </div>
    );
}

export default App;