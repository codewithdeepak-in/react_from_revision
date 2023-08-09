
// conditional render and maping of list 
// map is higher order function that used on array 


import React, { useState } from 'react';

const App = () => {

    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [input , setInput] = useState('');
    const [value, setValue] = useState('');
    function handleDelete(index) {
        const updatedList = [...list]; // Create a new array using spread operator
        // spread operator is used to copy. 
        updatedList.splice(index, 1); // Remove the item
        // splice method is used for removing an items from an Array. it takes two arguments: the index. the starting point and the number of items we want to remove from it 
        setList(updatedList); // Update the state with the new array
    }

    function handleSubmit(e){
        e.preventDefault();
        setList([...list, input]);
        setInput('');
    }


    return (
        // everything written inside return is not html but it's JSX 
        <div>

            <h1 style={{ paddingTop: '2rem', textAlign: 'center' }}>Hello World!</h1>

            {list.map((item, index) => (
                <p key={index}>
                    {item} <button onClick={() => handleDelete(index)}>Delete</button>
                </p>
            ))}

            <br /><hr></hr><br />
            <form>
           {input}
                <input
                    type="text"
                    style={{ height: '40px', width: '100%', padding: '0px 10px', fontSize: '1.3rem' }}
                    onChange={(e) => { 
                        e.preventDefault();
                        setInput(e.target.value)
                    }}
                    value={input}
                />
                <br /><br />
                <button 
                    type="submit" 
                    style={{height: '40px', width: '100%'}}
                    onClick={handleSubmit}
                    
                >Submit</button>
            </form>

        </div>
    );
};

export default App;

// The reason it is necessary to use state in this is because when you directly modify the list reacter don't have any idea for re-render to work.
