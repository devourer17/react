import React, {Component} from 'react';
import PersonRender from "./PersonRender";

// Passing Data From Parent To Child
class PersonsRender extends Component {
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
        const personList = persons.map(p => <PersonRender person={p}/>)
        return (
            <div>{personList}</div>
        );
    }
}

export default PersonsRender;