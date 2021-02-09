import React, {Component} from 'react'

class MessageComponent extends Component {

    constructor() {
        super();
        this.state = {
            message: 'Click below to subscribe',
            count: 0
        }
    }

    changeState() {
        // If we don't use setState() method, any updates to variables don't get rendered in UI
        // like this : this.state.count = this.state.count + 1;

        this.setState({
            message: 'Thank You For Subscribing',
            count: this.state.count + 1
        }, () => {
            // This is a synchronous call, showing updated current count value
            console.log(this.state.count)
        })

        // This is old value as this is an asynchronous call
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <p>{this.state.message} - {this.state.count} subscribes</p>
                <button onClick={() => this.changeState()}>Subscribe</button>
            </div>
        )
    }
}

export default MessageComponent