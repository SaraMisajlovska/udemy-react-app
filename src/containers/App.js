import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import classes from './App.css'
import Cockpit from '../components/Cockpit/Cockpit'

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
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangedHandler}
        />
      );
    };

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked = {this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
