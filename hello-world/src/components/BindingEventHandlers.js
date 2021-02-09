import React, {Component} from 'react';

// Way 1 - Binding In Render Method
// Every Update To State Causes To Re-Render Creating A New Event Handler Everytime
class BindingEventHandlers1 extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Click Below!'
        }
    }

    clickHandler() {
        this.setState({
            message: 'Button Clicked...'
        })
        console.log(
            this
        )
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        );
    }
}

// Way 2 - Arrow Functions In Render Method
class BindingEventHandlers2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Click Below!'
        }
    }

    clickHandler() {
        this.setState({
            message: 'Button Clicked...'
        })
        console.log(
            this
        )
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/*This One Here Is A Function Call*/}
                <button onClick={() => this.clickHandler()}>Click</button>
            </div>
        );
    }
}

// Way 3 - Binding Event Handler In Class Constructor Rather Than Render Method
// Call Happens Just Once
// Favorable, Performant
class BindingEventHandlers3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Click Below!'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'Button Clicked...'
        })
        console.log(
            this
        )
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* Function Handler As Usual*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}


// Way 4 - Class Property As Arrow Functions
// Favorable, Performant, Experimental Right Now
class BindingEventHandlers4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Click Below!'
        }
    }

    clickHandler = () => {
        this.setState({
            message: 'Button Clicked...'
        })
        console.log(
            this
        )
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* Function Handler As Usual*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default BindingEventHandlers4;