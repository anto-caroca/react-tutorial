import React, { Component } from 'react';
import Ninjas from './Ninja/Ninjas'
import AddNinja from './Ninja/AddNinja'
import './App.css'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }
  deleteNinja = (id) => {
    // console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    });
  }
  componentDidMount(){ // this fires when the component first mounts the dom
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState, snapshot){ // this fires when we have a change of states or props
    console.log('component updated');
    console.log(prevProps, prevState); // this is the props and the state before tha data was updated
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;