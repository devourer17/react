import React, {Component} from 'react'

class MessageComponent extends Component {

    // https://www.youtube.com/watch?v=uirRaVjRsf4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=11&ab_channel=Codevolution

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

        // Update 1
        // this.setState({
        //     message: 'Thank You For Subscribing',
        //     count: this.state.count + 1
        // }, () => {
        //     // This is a synchronous call, showing updated current count value
        //     console.log('Sync Val ' + this.state.count)
        // })
        //
        // // This is old value as this is an asynchronous call
        // console.log('Async Val ' + this.state.count)

        // Update 2
        // First Param - Method With PreviousState & Props, Second Param Another Method With Callback
        this.setState((previousState, props) => ({
            message: 'Thank You For Subscribing',
            count: previousState.count + 1
        }), () => {
            console.log('Sync Val ' + this.state.count)
        })
    }

    changeState5x() {
        // Even Though We are calling 'changeState' 5x, React is grouping mulitple 'setState' calls
        // into a single update for better performance, therefore updated value is not carried over
        // Hence, we've to pass previousState in 'setState' method rather than absolute 'this.state.count'
        this.changeState()
        this.changeState()
        this.changeState()
        this.changeState()
        this.changeState()
    }

    render() {
        return (
            <div>
                <p>{this.state.message} - {this.state.count} subscribes</p>
                <button onClick={() => this.changeState()}>Subscribe</button>
                <button onClick={() => this.changeState5x()}>Subscribe 5x</button>
            </div>
        )
    }
}

export default MessageComponent