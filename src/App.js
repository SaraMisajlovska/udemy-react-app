import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {
        name: 'Max',
        age: 28
      },
      {
        name: 'Manu',
        age: 29
      }, {
        name: 'Stephanie',
        age: 25
      }
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked')
    // this is wrong this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {
          name: newName,
          age: 28
        },
        {
          name: 'Manu',
          age: 29
        }, {
          name: 'Stephanie',
          age: 27
        }
      ]
    })

  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Max',
          age: 28
        },
        {
          name: event.target.value,
          age: 29
        }, {
          name: 'Stephanie',
          age: 25
        }
      ]
    })
  }

  render() {
    const style={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      //this is jsx code, not html even though it looks like it 
      //bind syntax is better than arrow function for switch name 
      <div className="App">
        <h1>Hi, I'm Sara Misajlovska.</h1>
        <button 
        onClick={() => this.switchNameHandler('Maxus')}
        style={style}
        >Switch name</button>

        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Maximilian')} />

        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          changed = {this.nameChangedHandler}/>

        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Max!!')}> 
           My hobbies: Racing
        </Person>
      </div>
    );

    // return React.createElement( 'div',{className:'App'},React.createElement('h1',null, 'Hi, I\'m Sara Misajlovska!!! This works'))
  }
}

export default App;
