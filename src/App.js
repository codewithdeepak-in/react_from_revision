// Here i created simple arrow function in javascipt 


const App = () => {
 
    const temp = <div>React is not that hard.</div>


    return (
        // everything written inside return is not html but it's JSX 
        <div>

            {/* Lets Know more about jsx in detail.

                Jsx is javascipt XML  */}
                {/* Jsx is the html code written in JavaScript file. and this file is complied using babel before executing on browser. */}

            <h3>Hello World</h3>
            {temp} 
            {/* Like this we can also call javascipt function and variables inside the components. */}

        </div>
    );

}

export default App;