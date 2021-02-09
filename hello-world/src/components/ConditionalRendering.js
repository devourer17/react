import React, {Component} from 'react';

// Using IF-ELSE
class ConditionalRendering1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserLogged: false
        }
    }

    login() {
        this.setState({
            isUserLogged: true
        })
    }

    logout() {
        this.setState({
            isUserLogged: false
        })
    }

    render() {
        if (this.state.isUserLogged) {
            return (
                <div>
                    <p>Welcome User</p>
                    <button onClick={() => this.logout()}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <p>Welcome Guest</p>
                    <button onClick={() => this.login()}>Login</button>
                </div>
            );
        }
    }
}


// Using Element Variables
class ConditionalRendering2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserLogged: false
        }
    }

    login() {
        this.setState({
            isUserLogged: true
        })
    }

    logout() {
        this.setState({
            isUserLogged: false
        })
    }

    render() {
        let message;
        if (this.state.isUserLogged) {
            message =
                <div>
                    <p>Welcome User</p>
                    <button onClick={() => this.logout()}>Logout</button>
                </div>
        } else {
            message =
                <div>
                    <p>Welcome Guest</p>
                    <button onClick={() => this.login()}>Login</button>
                </div>
        }

        return message
    }
}

// Using Ternary Operator
class ConditionalRendering5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserLogged: false,
            name: 'Guest',
            buttonName: 'Login',
            userOptions: ['Guest', 'User'],
            buttonOptions: ['Login', 'Logout']
        }
    }

    toggle() {
        this.setState({
            isUserLogged: !this.state.isUserLogged,
            name: this.state.isUserLogged ? this.state.userOptions[1] : this.state.userOptions[0],
            buttonName: this.state.isUserLogged ? this.state.buttonOptions[1] : this.state.buttonOptions[0],
        })
    }

    render() {
        return (
            <div>
                <p>Welcome {this.state.name}</p>
                <button onClick={() => this.toggle()}>{this.state.buttonName}</button>
            </div>
        )
    }
}

export default ConditionalRendering5;