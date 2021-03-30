import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyApp from "./MyApp";
import Car_Component from "./Car_Component";
import Garage from "./Garage";
import Car from "./Car";

const name = 'Prakash';
const element = <h1>Hello, {name}</h1>;

//ReactDOM.render(element, document.getElementById('root'));



//setInterval(tick, 1000);

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('root'));
}

// a simple car component
ReactDOM.render(<Car_Component/>, document.getElementById('root'));
// example with props
const carinfo = {name: "Ford", model: "Honda"};
ReactDOM.render(<Car brand={carinfo}/>, document.getElementById('root'))
// example with props. called from another component
ReactDOM.render(<Garage/>, document.getElementById('root'));
ReactDOM.render(
    <React.StrictMode>
        <MyApp />
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
