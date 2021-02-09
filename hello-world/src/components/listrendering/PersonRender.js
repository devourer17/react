import React, {Component} from 'react';

class PersonRender extends Component {
    render() {

        // Destructured
        const {person} = this.props
        return (
            <div>
                <h1>Hi, I am {person.name}, I am {person.age} years old, currently skilled
                    in {person.skill}.</h1>
            </div>
        );

        // Default
        // return (
        //     <div>
        //         <h1>Hi, I am {this.props.person.name}, I am {this.props.person.age} years old, currently skilled
        //             in {this.props.person.skill}.</h1>
        //     </div>
        // );
    }
}

// function PersonRender({person}) {
//     return (<div>
//         <h1>Hi, I am {person.name}, I am {person.age} years old, currently skilled
//             in {person.skill}.</h1>
//     </div>)
// }

export default PersonRender;