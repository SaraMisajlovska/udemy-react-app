import React from "react";
import classes from "./Cockpit.css"

const cockpit = (props) => {

    const aClasses = [];
    let btnClass = '';


    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        aClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        aClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm Sara Misajlovska.</h1>
            <p className={aClasses.join(' ')}>This is real, this is mee</p>
            <button
                onClick={props.clicked}
                className={btnClass}
            >
                Toggle persons
            </button>
        </div>
    );
};

export default cockpit;