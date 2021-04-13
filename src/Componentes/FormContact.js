import Form from 'react-bootstrap/Form';
import React, { useState } from "react";

export default function FormContact(){

    const [user, setUser] = useState({
        id: "",
        image: "",
        name: "",
        address: "",
        email: "",
        phone: "",
      });

    function onChange(event) { setUser({[event.target.name]: event.target.value}) }

return (
    <Form>
        <Form.Row>
            <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
            type="text"
            name="name"
            value={user.firstName}
            onChange={onChange}
            required
            /></Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
            type="text"
            name="address"
            value={user.address}
            onChange={onChange}
            required
            /></Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
            type="text"
            name="email"
            pattern="^[a-zA-Z0-9._-]+@[a-zA-Z-]+\.[a-zA-Z]+"
            value={user.email}
            onChange={onChange}
            required
            /></Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
            type="text"
            name="phone"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            value={user.phone}
            onChange={onChange}
            required
            /></Form.Group>
        </Form.Row>
    </Form>       
) }