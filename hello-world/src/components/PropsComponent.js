import React, {Component} from 'react'

// Funtional Component
// function GreetUser(props) {
//     console.log(props);
//     Props Are Immutable - Error
//     props.name = 'My Custom Name'
//     return (
//         <div>
//             <h1>Welcome {props.name}</h1>
//             <h5>{props.children}</h5>
//         </div>
//     )
// }

// Class Component
class GreetUser extends Component {
    render() {
        return (
            <div>
                <h1>Welcome {this.props.name}</h1>
                <h5>{this.props.children}</h5>
            </div>
        )
    }
}

export default GreetUser