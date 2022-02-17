import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {
        id: 'sdad4',
        name: 'Max',
        age: 28
      },
      {
        id: 'ffdgf8',
        name: 'Manu',
        age: 29
      },
      {
        id: 'hggf5',
        name: 'Stephanie',
        age: 25
      }
    ]
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = { ...this.state.persons[personIndex] };
    const persons = [...this.state.persons];

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonsHandler = (personsIndex) => {
    //we want to copy the array so we avoid unpredictable apps.
    //Always make changes to the copy rather than to a reference of the original array as that may lead to unpredictability
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />)
          })}
        </div>);

      style.backgroundColor = 'red';
    };

    const classes = []; 

    if (this.state.persons.length<=2) {
      classes.push('red');
    }
    if (this.state.persons.length<=1) {
      classes.push('bold');
    }



    return (
      //this is jsx code, not html even though it looks like it 
      //bind syntax is better than arrow function for switch name 
      <div className="App">
        <h1>Hi, I'm Sara Misajlovska.</h1>
        <p className={classes.join(' ')} >A working solution</p>
        <button
          onClick={this.togglePersonsHandler}
          style={style}
        >Toggle persons</button>
        {persons}
      </div>

    );

    // return React.createElement( 'div',{className:'App'},React.createElement('h1',null, 'Hi, I\'m Sara Misajlovska!!! This works'))
  }
}

export default App;
