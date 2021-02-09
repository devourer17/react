import logo from './logo.svg';
import './App.css';

import HelloWorldComponent from './components/FunctionComponent-HelloWorld.js'
import WelcomeComponent from './components/ClassComponent-HelloWorld.js'
import HelloWorldJSX from './components/JSX-HelloWorld.js'
import GreetUser from './components/PropsComponent'
import MessageComponent from "./components/StateComponent";

function App() {
    return (
        <div className="App">
            <HelloWorldComponent/>
            <WelcomeComponent/>
            <HelloWorldJSX/>
            {/* No Children Props  */}
            <GreetUser name="Vivek"/>
            <GreetUser name="Rashmi"/>
            <GreetUser name="Arun">
                This is a children prop
            </GreetUser>

            <MessageComponent />
        </div>
    );
}

export default App;
