import React, {Component} from 'react';

class ComplexListRendering extends Component {
    render() {
        const persons = [{
            id: 1,
            name: 'Vivek',
            age: 28,
            skill: 'Java'
        }, {
            id: 2,
            name: 'Rashmi',
            age: 22,
            skill: 'React'
        }, {
            id: 3,
            name: 'Suman',
            age: 44,
            skill: 'Vue'
        }, {
            id: 4,
            name: 'Arun',
            age: 55,
            skill: 'Angular'
        }]
        const personList = persons.map(person => <h1>Hi I'm {person.name}, I'm {person.age} years old, currently skilled
            in {person.skill}.</h1>)
        return (
            // The curly braces here is must, as JSX needs to understand 'names' as variable
            <div>{personList}</div>
        );
    }
}

export default ComplexListRendering;