import React from "react";
import Form from "react-bootstrap/Form";
import './Filter.css';

class Filter extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Filter Beasts</Form.Label>
                    <Form.Select>
                        <option>Select Number of Horns</option>
                        <option value="1">One Horn</option>
                        <option value="2">Two Horns</option>
                        <option value="3">Three Horns</option>
                        <option value="100">One Hundred Horns</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        )
    }
};

export default Filter;