const App = () => {

    const style={
        fontSize: '3rem',
        backgroundColor: 'red',
    
    } 
    // This is internal CSS 



    return (

        // Anything Written inside this return is jsx

        <div>
            <h1 
                style={{fontSize: '3rem'}} 
                // This is how we can write inline css in react inside jsx 
            >Hello World!</h1>

            <p style={style}>This is Deepak Chaudhary</p>
        </div>
    )
}

export default App;