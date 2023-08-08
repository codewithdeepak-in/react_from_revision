/* 

useContext is a hook in React that provides a way to share data between components without having to pass props through every level of the component tree. It's a powerful tool for managing state or global data in your application, especially when dealing with complex component hierarchies.


1. Step

    const MyContext = React.createContext(); First create context to store data. 

2. Step

    <MyContext.Provider value={value}>
        All the components to which you want to pass data.
    </MyContext.Provider>

3. Step

    const value = useContext(MyContext)

    value is now accessible from anywhere in your components.


    For the Better understanding Let's take an example.
*/
import React, { useContext } from 'react';


const MyContext = React.createContext();

const Mycontext = () => {

    const value = "Hello World!";

    return(
        <>
            <MyContext.Provider value={value}>
                <Demo />
            </MyContext.Provider>
        </>
    )

}


function Demo(){
    const value = useContext(MyContext);

    return(
        <>
            <h2>Let's learn about useContext.</h2>
            <br />
            <Temo />
            <br />
            {value}
        </>
    )

}

function Temo(){
    const value = useContext(MyContext);

    return(
        <>
          
            {value}
        </>
    )
}




export default Mycontext;