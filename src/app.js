
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

export default App;
