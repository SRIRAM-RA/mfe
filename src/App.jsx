import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CopyBlock, dracula } from 'react-code-blocks';
import "./index.css";

const App = () => {
  const [functionalCode, setFunctionalCode] = useState("const MyComponent = (props) => {\n \treturn <div>{props.message}</div> \n};");
  const [classComponentCode, setClassCode] = useState("class MyClassComponent extends React.Component { \n \t constructor(props) { \n \t   super(props); \n \t   this.state = { count: 0 }; \n \t } \n \t render() { \n \t   return <div>{this.state.count}</div>; \n \t } \n }")
  const [classState, setClassState] = useState("class MyClassComponent extends React.Component { \n \t constructor(props) { \n \t   super(props); \n \t   this.state = { count: 0 }; \n \t } \n \t incrementState = () => { \n \t   this.setState({ count: 100 }); \n \t } \n \t render() { \n \t   return <div>{this.state.count}</div>; \n \t } \n }")
  const [reactFragments, setReactFragments] = useState("<React.Fragment>\n \t <div>Hello World</div> \n </React.Fragment>")

  return (
    <div className="container">
      <div className="div-conponentbox">
        <h1>Components</h1>
        <div>
          <p>React is a popular JavaScript library for building user interfaces, and it follows a component-based architecture. Components are the building blocks of a React application, and they can be reusable and modular. Here are the key components in React:</p>
          <ul>
            <li>Functional Components</li>
            <li>Class Components</li>
          </ul>
        </div>
        <div>
          <h2><span>*</span> Functional Components</h2>
          <ul>
            <li>These are also known as stateless components or presentational components.</li>
            <li>Defined using a function.</li>
            <li>Accept props as an argument and return React elements.</li>
          </ul>
        </div>
        <div>
          <CopyBlock
            text={functionalCode}
            language="jsx"
            showLineNumbers={true} // Set to true if you want to display line numbers
            theme={dracula}
          />
        </div>
        <div>
          <h2><span>*</span> Class Components</h2>
          <ul>
            <li>Also known as stateful components.</li>
            <li>Defined using ES6 classes and extend from React.Component.</li>
            <li>Can hold and manage local state.</li>
          </ul>
        </div>
        <div>
          <CopyBlock
            text={classComponentCode}
            language="jsx"
            showLineNumbers={true} // Set to true if you want to display line numbers
            theme={dracula}
          />
        </div>
        <div>
        <h2><span>*</span> React Usable Inbuilt Functions</h2>
          <p> <span className="italicText">Props, State, and Refs</span> are commonly referred to as the three main sources of data in React components. Which will be used to handle data from one component to another, handle data within the component.</p>
          <p> <b>Props: </b></p>
          <ul>
            <li>Short for properties.</li>
            <li>Used to pass data from a parent component to a child component.</li>
            <li>Immutable and should not be modified by the child component.</li>
          </ul>
          <p> <b>State: </b></p>
          <ul>
            <li>Used to manage the internal state of a component.</li>
            <li>State changes trigger re-rendering of the component.</li>
            <li>Should be modified using setState() method.</li>
            <br/>
            <li><b>Note:</b> Setting the state value differs in Class Component</li>
            <li>
              <CopyBlock
              text={classState}
              language="jsx"
              showLineNumbers={true} // Set to true if you want to display line numbers
              theme={dracula}
            />
            </li>
          </ul>
          <p> <b>Refs: </b></p>
          <ul>
            <li>Used to reference a DOM element or a class component.</li>
            <li>Allows direct access to the DOM or to a component's instance.</li>
          </ul>
          <p> <b>Lifecycle Methods: </b>(Only for Class Components)</p>
          <ul>
            <li>Methods that are called at different points in the lifecycle of a component.</li>
            <li>Examples include componentDidMount, componentDidUpdate, and componentWillUnmount.</li>
          </ul>
          <p> <b>Hooks: </b>(Only for Functional Components)</p>
          <ul>
            <li>Introduced in React 16.8, hooks allow functional components to use state and other React features.</li>
            <li>Examples include useState for managing state and useEffect for handling side effects.</li>
          </ul>
          <p> <b>React Fragments: </b></p>
          <ul>
            <li>Used to group multiple elements without adding an extra node to the DOM.</li>
            <li>
              <CopyBlock
              text={reactFragments}
              language="jsx"
              showLineNumbers={true} // Set to true if you want to display line numbers
              theme={dracula}
              />
            </li>
          </ul>
        </div>
        <div>
          <p><b>Note: </b> Class Components are not used much in the Industry, but it is good to know about that too</p>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
