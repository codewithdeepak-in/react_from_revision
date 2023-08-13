
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addList } from './store/count'
import { addUser } from './store/user';

const App = () => {
    const counter = useSelector((state) => state.counter.list);
    const users = useSelector((state) => state.users)

    console.log(users);

    const dispatch = useDispatch();
    console.log(counter);
    return (
        // everything written inside return is not html but it's JSX 
        <div>
            <h1>Hello World!</h1>
            <hr />
            <div style={{ textAlign: 'left' }}>
                <ol>
                    {counter.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ol>
            </div>
            <button onClick={() => dispatch(addList({ id: counter.length + 1, title: 'Rama kanth Rao' }))}>Add Items </button>
            <hr />
            <div style={{textAlign: 'left', margin: '2rem'}}>
                {users.array.map((item ,index) => (
                    <li key={index}>{item}</li>
                ))}
            </div>
            <button onClick={() => dispatch(addUser(Math.floor(Math.random() * 255)))}>Add Users</button>

            <hr />
            <footer>
                Footer of the Page
            </footer>
        </div>
    );

}

export default App;