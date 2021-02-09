import logo from './logo.svg';
import './App.css';

import HelloWorldComponent from './components/FunctionComponent-HelloWorld.js'
import WelcomeComponent from './components/ClassComponent-HelloWorld.js'
import HelloWorldJSX from './components/JSX-HelloWorld.js'
import GreetUser from './components/PropsComponent'
import MessageComponent from "./components/StateComponent";
import Destructuring from "./components/DestructuringPropsAndStates";
import EventHandling from "./components/EventHandling";
import BindingEventHandlers from "./components/BindingEventHandlers";
import ParentComponent from "./components/relation/ParentComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import SimpleListRendering from "./components/listrendering/SimpleListRendering";
import ComplexListRendering from "./components/listrendering/ComplexListRendering";
import PersonsRender from "./components/listrendering/PersonsRender";

function App() {
    return (
        <div className="App">
            {/*<HelloWorldComponent/>*/}
            {/*<WelcomeComponent/>*/}
            {/*<HelloWorldJSX/>*/}
            {/*/!* No Children Props  *!/*/}
            {/*<GreetUser name="Vivek"/>*/}
            {/*<GreetUser name="Rashmi"/>*/}
            {/*<GreetUser name="Arun">*/}
            {/*    This is a children prop*/}
            {/*</GreetUser>*/}
            {/*<MessageComponent />*/}
            {/*<Destructuring firstName="Vivek" secondName="Singh"/>*/}
            {/*<EventHandling />*/}
            {/*<BindingEventHandlers/>*/}
            {/*<ParentComponent/>*/}
            {/*<ConditionalRendering/>*/}
            {/*<SimpleListRendering/>*/}
            {/*<ComplexListRendering/>*/}
            <PersonsRender/>
        </div>
    );
}

export default App;
