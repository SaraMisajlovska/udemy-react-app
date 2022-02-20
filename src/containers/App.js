import React, { PureComponent } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxilliary';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

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
    ],
    togglePersons: 0,
    authenticated: false
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        togglePersons: prevState.togglePersons + 1
      }
    })
  };

  deletePersonsHandler = (personsIndex) => {
    //we want to copy the array so we avoid unpredictable apps.
    //Always make changes to the copy rather than to a reference of the original array as that may lead to unpredictability
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({ persons: persons });
  };

  login = () => {
    this.setState({ authenticated: true });
  }

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
      <Aux>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.login}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
        
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
