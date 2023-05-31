import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            helloCounter: 0,
            inDB: false
        }
    }

    incrementHello = () => {
        this.setState({
            helloCounter: this.state.helloCounter + 1
        })
    }

    handleModalEvent = () => {
        this.props.updateBeast(this.props.entireBeast);
        this.props.toggleModal()
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image_url} height='300rem' onClick={this.handleModalEvent} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.description}
                    </Card.Text>
                    <Button id="bigbutton" variant="primary" onClick={this.incrementHello}>Add Like</Button>
                    <div>❤️'s: {this.state.helloCounter}</div>
                    <Button id="bigbutton" variant="success" onClick={this.incrementHello}>{this.state.inDB ? "Remove from Database" : "Add to Database"}</Button>
                    <div>In Database: {this.state.inDB ? "True" : "False"}</div>
                </Card.Body>
            </Card>
        )
    }
};

export default HornedBeast;