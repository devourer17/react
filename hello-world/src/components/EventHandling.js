import React, {Component} from 'react';

// STATELESS Event Binding

// Class Based
class EventHandlingClass extends Component {
    // No keyword 'function'
    printMe() {
        console.log('Clicked Class')
    }

    render() {
        return (
            <div>
                {/* We will not put this.printMe() because its a function handler & NOT a function call*/}
                <button onClick={this.printMe}>Click Me</button>
            </div>
        );
    }
}

function EventHandlerFunction() {
    // Keyword 'function' mandatory
    function printFunc() {
        console.log('Clicked Function')
    }

    return (
        <div>
            {/* We will not put printFunc() because its a function handler & NOT a function call*/}
            <button onClick={printFunc}>Click Me</button>
        </div>
    )
}

export default EventHandlingClass;