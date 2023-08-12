// Let's Learn About Transitions in React. 

/* 

There are four different Steps for this.
1. Entering.
2. Entered.
3. Exiting.
4. Exited.

*/

import CssTr from './csstransition'
import { useState } from 'react';
import { Transition } from 'react-transition-group';
import List from './transitiongroup';


const App = () => {
    
    let [show , setShow] = useState(true);

    const handleClick = () => setShow(!show);

    return (
        
        // <div className="app">
        //   <h1>Hello World!</h1>

        //     { show && <div style={{height: '100px', background: 'red', transition: '2s ease', opacity: '0.2'}}>
           
        //    </div>}
           
        //     <br />
        //     <button onClick={handleClick}>Click Me</button>

        // </div>
        // This is how we can also create transition but this is not something which react know.
            <>
                <Transition
                    in={show}
                    timeout={1000}
                >
                   {show => 
                    <div className={`${show}`}>
                        {`effect ${show}`}
                    </div>
                   }
                </Transition>
                <button onClick={() => handleClick()}>Click Me</button>


                <hr />

                <CssTr />

                <hr />

                <List />
            </>
        );

}


export default App;