import React, { useState, useEffect, useReducer } from 'react';     //useContext for context

export default function Greetings(props) {
    console.log('render Greetings');
    const name = useFormInput("Pista");
    const surname = useFormInput("Nagy");
    const width = useWindowWidth();
    const small = useMedia("(max-width: 400px)");
    const large = useMedia("(min-width: 800px)");

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
            <small>{width} </small>
            <p> Small { small ? 'Yes' : 'No' } </p>       
            <p> Large { large ? 'Yes' : 'No' } </p>       
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
function useWindowWidth(dispatch) {
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

// this function make a checks, normally we must nest at each condition
// but with hooks we can solve different way
// ex. window.matchMedia("(min-width: 800px)").matches is true or false
function useMedia(query) {
    const media = window.matchMedia(query);
    const [matches, setMatches] = useState(media.matches);

    // useEffect got 2 param: 
    // - 1. is a function which execute what we need
    // - 2. is input param, like previous state or prop

    useEffect( () => {
        // init
        if (matches !== media.matches) {
            setMatches(media.matches);
        }
        // componentDidMount part
        const listener = () => setMatches(media.matches);
        media.addListener(listener);
        // componentWillUnmount
        return () => media.removeListener(listener);
        // query is input for useffect, like prevProps at componentDidUpdate
    }, [query])

    return matches;
}

// use effect with timer also tricky because we must clean up the timer
// this not let slideshow move foward after you paused or when rerendered
/*
useEffect(() => {

    if (isPlaying) {
        let timer = setTimoutout( () => {
            setCurrentIndex(currentIndex++);
        }, 2000)

        return () => clearTimeout(timer);
    }
}, [currentIndex, isPlaying])

*/

// key is used to reset element
/*
    <ProgressBar
        key={currentIndex + isPlaying}
        time={SLIDE_DURATION}
        animate={isPlaying}
    />

*/