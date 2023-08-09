
import React, { useState } from 'react';
import DoubleClick from './events/doubleclick';

const App = () => {

    const [count , setCount] = useState(false);

    console.log(count);

    const style = {
        heading: {
            color: "red",
            fontSize: "20px",
            margin: '1rem',
            textAlign: "center",
            paddingTop: "1rem",
        }, 
        button: {
            cursor: "pointer",
            width: '100%',
            fontSize: '2rem',
            textAlign: 'center'
        }
    }


    function handleChange(){
        setCount(!count);
    }

    return (
        <div>

            <h2 style={style.heading}>Different Types of Events</h2>

            <br />

            {count ? <div style={style.button}>Deepak Chaudhary</div> : <div style={style.button}>Ritika Mahur</div>}

            <br /> 
            <br />

            <button onClick={handleChange} style={style.button}>Click</button>
            <hr />

            <DoubleClick props={style.button}/>
        </div>  
    )
}

export default App;





/*



In React, events are interactions that occur within your application, such as clicks, inputs, and other user interactions. React provides a consistent way to handle events across different browsers by using synthetic events, which are similar to native DOM events but have some differences. Here are some of the different types of events in React:

Mouse Events:

1. onClick: Fired when an element is clicked.
2. onDoubleClick: Fired when an element is double-clicked.
3. onMouseDown: Fired when a mouse button is pressed down on an element.
4. onMouseUp: Fired when a mouse button is released on an element.
5. onMouseMove: Fired when the mouse pointer moves over an element.
7. onMouseEnter: Fired when the mouse pointer enters an element.
8. onMouseLeave: Fired when the mouse pointer leaves an element.
Keyboard Events:

onKeyDown: Fired when a key is pressed.
onKeyUp: Fired when a key is released.
onKeyPress: Fired when a key is pressed and released.
Form Events:

onChange: Fired when the value of an input, textarea, or select element changes.
onSubmit: Fired when a form is submitted.
onFocus: Fired when an input element receives focus.
onBlur: Fired when an input element loses focus.
Touch Events:

onTouchStart: Fired when a touch point is placed on the touch surface.
onTouchMove: Fired when a touch point moves along the touch surface.
onTouchEnd: Fired when a touch point is removed from the touch surface.
Other Events:

onScroll: Fired when an element's scroll position changes.
onLoad: Fired when an element, such as an image, finishes loading.
onError: Fired when an error occurs while loading an element, like an image.

*/

