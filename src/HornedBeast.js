import React from "react";

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            helloCounter: 0
        }
    }

    incrementHello = () => {
        this.setState({
            helloCounter: this.state.helloCounter + 1
        })
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageURL} alt={this.props.title} title={this.props.title} />
                <p>{this.props.description}</p>
                <button onClick={this.incrementHello}>Add a like</button>
            </div>
        )
    }
};

export default HornedBeast;