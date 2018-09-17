import React from 'react';
import './Person.css'

// props is an object that gives us access to all the attributes we pass to our own components

const Person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p> 
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Person;