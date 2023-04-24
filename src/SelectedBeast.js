import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


class SelectedBeast extends React.Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.beast.image_url} alt={this.props.beast.description} width={425}/>
                    <p>Photo: {this.props.beast.description}</p></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.toggleModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast;