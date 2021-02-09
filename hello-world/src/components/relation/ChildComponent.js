import React, {Component} from 'react';

class ChildComponent extends Component {
    render(props) {
        return (
            <div>
                {/* Use The Parent Event Handler In The onClick(system) event handler*/}

                {/* Here we are not passing any properties from child to parent */}
                <button onClick={this.props.greetHandler}>Greet Parent</button>

                {/*  If Passing the values from child to parent, we've to use the arrow functions*/}

                <button onClick={() => this.props.greetHandler('Child')}>Greet Parent Via Params</button>
            </div>
        );
    }
}

export default ChildComponent;