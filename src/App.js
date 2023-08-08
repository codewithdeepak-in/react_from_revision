<<<<<<< Updated upstream
// Here i created simple arrow function in javascipt 


const App = () => {
 
    return (
        // everything written inside return is not html but it's JSX 
        <div>
            <h3>Hello World</h3>
        </div>
    );
=======
import First from './components/first';
import Second from './components/second';
import UseState from './states/usestate';
import UseEffect from './states/useeffect';
import Usecontext from './states/usecontext';
import UseReducer from './states/usereducer';
import ParentComponent  from './states/usecallback';


const App = () => {

    return(
        <>
            <h2>State and Lifecycle</h2>

            {/* Class State We learn about this in components */}
            {/* first file of components is all about class state and lifecycle. */}

            <First />

            <h3>Functional Component</h3>

            <Second/>


            <h1>Different Types of State.</h1>

            <ol>
                <li>
                    Form using useState Hook.
                        <br />
                    <UseState />
                </li>
            </ol>

            <h1>Let's Learn about Useffect</h1>

            <ol>
                <li>
                    Let's Take an Example of UseEffect

                    <UseEffect />

                </li>
            </ol>
            <ol>
                <li>
                    Let's Take an Example of Usecontext

                    <Usecontext />

                </li>
            </ol>
            <ol>
                <li>
                    Let's Take an Example of UseReducer

                    <UseReducer />

                </li>
            </ol>

            <hr />

            <ParentComponent />

        </>
    )
>>>>>>> Stashed changes

}

export default App;  