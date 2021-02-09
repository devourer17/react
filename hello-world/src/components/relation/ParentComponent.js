import React, {Component} from 'react';
import ChildComponent from "./ChildComponent";

// Method As Props
// Child Communicating With Parent
// Component Within A Component
// Child Component Calling A Method Of Parent Component
class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        //Template Literals - ES6
        console.log(childName)
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                {/* Use The Child Component
                    Create A Custom EventHandler
                    Assign The Parent Function Handler Which Needs To be Invoked
                  */}
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        );
    }
}

export default ParentComponent;