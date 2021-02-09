import React, {Component} from 'react';

class SimpleListRendering extends Component {
    render() {
        const names = ['Vivek', 'Rashmi', 'Arun', 'Suman']
        return (
            // The curly braces here is must, as JSX needs to understand 'names' as variable
            <div> {
                names.map(name => <h1>{name}</h1>)
            }
            </div>
        );
    }
}

// OR

class SimpleListRendering2 extends Component {
    render() {
        const names = ['Vivek', 'Rashmi', 'Arun', 'Suman']
        const nameList = names.map(name => <h1>{name}</h1>)
        return (
            // The curly braces here is must, as JSX needs to understand 'names' as variable
            <div>{nameList}</div>
        );
    }
}

export default SimpleListRendering2;