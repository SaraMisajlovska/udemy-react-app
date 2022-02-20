import React from "react";
import classes from "./Cockpit.css"
import Auxilliary from '../../hoc/Auxilliary';

const cockpit = (props) => {

    const aClasses = [];
    let btnClass = [classes.Button];


    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    if (props.persons.length <= 2) {
        aClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        aClasses.push(classes.bold);
    }

    return (
        <Auxilliary>
            <h1>{props.appTitle}</h1>
            <h2>Hi, I'm Sara Misajlovska.</h2>
            <p className={aClasses.join(' ')}>This is real, this is mee</p>
            <button
                onClick={props.clicked}
                className={btnClass}
            >
                Toggle persons
            </button>
            <br />
            <button onClick={props.login}>
                Log in
            </button>
        </Auxilliary>
    );
};

export default cockpit;