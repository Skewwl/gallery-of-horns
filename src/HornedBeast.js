import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image_url} height='300rem' />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.description}
                    </Card.Text>
                    <Button id="bigbutton" variant="primary" onClick={this.incrementHello}>Add Like</Button>
                    <div>❤️'s: {this.state.helloCounter}</div>
                </Card.Body>
            </Card>
            // <div>
            //     <h2>{this.props.title}</h2>
            //     <img src={this.props.imageURL} alt={this.props.title} title={this.props.title} />
            //     <p>{this.props.description}</p>
            //     <button onClick={this.incrementHello}>Add a like</button>
            //     <div>❤️'s: {this.state.helloCounter}</div>
            // </div>
        )
    }
};

export default HornedBeast;