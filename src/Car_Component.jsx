import {Component} from "react";


function getModel(){
    return "Honda";
}

class Car_Component extends Component{
    render() {
        return <h2>Hi, I am a car with model {getModel()}</h2>
    }
}

//
export default Car_Component;