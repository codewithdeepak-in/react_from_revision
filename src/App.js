<<<<<<< Updated upstream
// Here i created simple arrow function in javascipt 


const App = () => {
 
    return (
        // everything written inside return is not html but it's JSX 
        <div>
            <h3>Hello World</h3>
        </div>
    );

}
=======
const App = () => {

    // internal CSS

    const style = {
        h1: {
            color:'red',
            fontSize: '2rem',
            boxShadow: '1px 1px 10px grey'
        }
    }

    return (
        <div style={{textAlign: 'center'}}> 
            {/* That's how we can write inline css. */}
            <h1 style={style.h1}>Hello World!</h1>
        </div>
    )
}

>>>>>>> Stashed changes

export default App;