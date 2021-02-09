import React, {Component} from 'react'

// Way 1
// Functional Component
function FunctionGetUser(props) {
    return (
        <div>
            <h1>Welcome {props.firstName} {props.secondName}</h1>
        </div>
    )
}

// Way 2 - Parameter Destructuring
// Functional Component
function FunctionGetUser2({firstName, secondName}) {
    return (
        <div>
            <h1>Welcome {firstName} {secondName}</h1>
        </div>
    )
}

// Way 3 - Method Destructuring
// Functional Component
function FunctionGetUser3(props) {
    const {firstName, secondName} = props

    // Likewise we do for states
    // const {prevState, nextState} = state
    return (
        <div>
            <h1>Welcome {firstName} {secondName}</h1>
        </div>
    )
}

// Way 1
// Class Component
class ClassGetUser extends Component {
    render() {
        return (
            <div>
                <h1>Welcome {this.props.firstName} {this.props.secondName}</h1>
            </div>
        )
    }
}

// Way 2
// Class Component
class ClassGetUser2 extends Component {
    render() {
        const {firstName, secondName} = this.props
        return (
            <div>
                <h1>Welcome {firstName} {secondName}</h1>
            </div>
        )
    }
}

export default ClassGetUser2