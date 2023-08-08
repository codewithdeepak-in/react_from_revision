
// useEffect is a hook in React, a JavaScript library for building user interfaces. It allows you to perform side effects in functional components, such as data fetching, DOM manipulation, and subscription setup, after the component has rendered. This hook is used to manage side effects in a declarative and controlled manner.


import React, { useEffect, useState } from 'react';

const UseEffect = () => {

    const [value, setValue] = useState([]);

    useEffect(() => {
        fetch("http://api.weatherapi.com/v1/current.json?key=cee096af2de44f13980104643230907&q=London&aqi=no")
        .then(response => response.json())
        .then(data => setValue(data))
    },[]);

    return (
        <div>
            Hello useEffect.
         
            {value.location ? (
                <div>{value.location.name}</div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default UseEffect;
