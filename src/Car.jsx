import {Component} from "react";


class Car extends Component{
    constructor(props) {
        super(props);
        this.state = {color: "red", model: props.brand.model};
    }

    render() {
        return <div><h2>Hi, I am a car with model {this.props.brand.model} and color {this.state.color}</h2>
        <h3>name {this.props.brand.name}</h3></div>
    }
}

export default Car;