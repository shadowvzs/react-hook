import React from 'react';
 import Greetings from './components/test';

export default function App(props) {
    console.log('app render');
    return (
        <div>
            <h1>Hello</h1>
            <Greetings />          
        </div>
    );
}