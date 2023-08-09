import React,{ useState } from 'react';



const DoubleClick = ({props}) => {

    function handleClick(){
        window.alert('Bingo');
    }


    const [color, setColor] = useState(false)

    function handleMouseOver(){
        setColor(true)
    }
    function handleMouseOut(){
        setColor(false)
    }

    const style = {
        backgroundColor: color ? 'blue' : 'aqua',
        color: color ? 'red' : 'blue',
        width: '100%',
        height: '100px',
        padding: '1rem',
        cursor: 'pointer',
        borderRadius: '10px',
    }

    return(
        <div>
            <div style={props}>Double Click</div>
            <br></br>
            <button style={props} onDoubleClick={handleClick}>D - Click</button>
            <hr />

            <div 
                style={style}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                This is Silly
            </div>
        </div>
    )

}

export default DoubleClick;