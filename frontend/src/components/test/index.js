import React, { useState, useEffect } from 'react';     //useContext for context

export default function Greetings(props) {
    console.log('render Greetings');
    const name = useFormInput("Pista");
    const surname = useFormInput("Nagy");
    const width = useWindowWidth();
    //const theme = useContext(ThemeContext);           //ThemeContext is imported from our context file
    useDocumentTitle(name.value + ' ' + surname.value);

    return (
        <div>
            <h1>{name.value}</h1>
            <input
                {...name}
            />
            <input
                {...surname}
            />
            <small>{width}</small>            
        </div>
    );
}

function useFormInput(initValue) {
    const [value, setValue] = useState(initValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    }
}

function useDocumentTitle(title) {
    // by default it is equivalent with componentDidMount + componentDidUpdate together
    // useEffect is like subscribe
    useEffect(() => {
        document.title = title; 
    });
}

// this is a custom hooks which is reuseable and separated because we make simplier our Greetings function
// custom hooks should have "use" name prefix (u can know if function name start with "use" then probabil got internal state)
function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
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
    return width;
}