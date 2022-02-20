import React, { Component } from "react";
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from "../../../hoc/Auxilliary";
import withClass from "../../../hoc/withClass.js";
import { AuthContext } from "../../../containers/App";
class Person extends Component {


    render() {
        return (
            <Aux>
                <AuthContext.Consumer>
                {auth => auth ? <p>I'm authenticated</p> : null}
                </AuthContext.Consumer>
                
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old.
                </p>
                <p>{this.props.children}</p>
                <input
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>);
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);
