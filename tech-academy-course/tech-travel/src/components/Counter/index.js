import React, { useState, useEffect } from 'react';

const CounterFunction = () => {
    const [ count, setCount ] = useState(0);
    const [ name, setName ] = useState('Daniel');

    const sumOne = () => {
        setCount(count+1);
    }

    useEffect(
        () => {
            return() => {
                console.log('Termina');
            }
        },
        [
            count
        ]
    );
    return(
        <div>
            <h1>{ name }</h1>
            <p>{count}</p>
            <button onClick={() => sumOne()}>
                Sonar 1
            </button>
        </div>
    )
}

export default CounterFunction;