import React, { useState, useEffect } from 'react';

export default function Greetings(props) {
    console.log('render Greetings');
    const [name, setName] = useState("Pista");
    const [surname, setSurname] = useState("Nagy");
    const [width, setWidth] = useState(window.innerWidth);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleSurnameChange(e) {
        setSurname(e.target.value);
    }

    // by default it is equivalent with componentDidMount + componentDidUpdate together
    // useEffect is like subscribe
    useEffect(() => {
        document.title = name + ' ' + surname; 
    });

    // we can separate lifecycle events depend what it do
    useEffect(() => {
        const resize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', resize);
        // if we return function then that will be executed if element will be removed from DOM
        // returned function equivalent with componentWillUnmount
        // if useEffect return something that that is un subscribe
        return () => {
            window.removeEventListener('resize', resize);
        };
    });


    return (
        <div>
            <h1>{name}</h1>
            <input
                value={name}
                onChange={handleNameChange}
            />
            <input
                value={surname}
                onChange={handleSurnameChange}
            />
            <small>{width}</small>            
        </div>
    );
}