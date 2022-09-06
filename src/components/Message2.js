import { Component } from "react";

class Message2 extends Component {
    render() {
        return <h1>This is a class component! {this.props.messageContent} {this.props.messageCode}</h1>;
    }
}

export default Message2;