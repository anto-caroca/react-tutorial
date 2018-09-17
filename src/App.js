import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // state is a special property. It is managed from inside a component and state is only available in components which are used by extending components. It is not available in function components
  // you should use functions components as much as posible
  // you should use state components with care because having state in all of your components and manipulating them from anywhere makes your app quickly unpredictable to manage
  state = { // js object 
    // we use state if we want to manage a component's internal data. 
    // this will merge our old state with the new one
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]

  }
// onClick in React uses a capital C 
// there you need to execute a function that is called a method because it is located inside a class
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // setState allows us to update our state property
    // we can pass a reference to this handler as a property to our component
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    })

    
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26}
      ]
    })
  }

render() {

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
  
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}/>
        <Person
         name={this.state.persons[1].name}
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}/>
           My Hobbies: running
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
  }
}
// click = {this.switchNameHandler} Here I'm passing as a reference to this click property, and now we can use this property in Person.js

export default App;
// My hobbies ... refers to the children property and you can nest complex html code there such as <ul> or react components, anything can be there