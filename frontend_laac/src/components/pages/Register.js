import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Register.css";

export default function Register() {
  return (
    <div className="container">
      <Form className="formulario_register">
        <Form.Group controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Lembrar Login" />
        </Form.Group>
        <Button variant="primary" type="submit" className="botao">
          Register
        </Button>
      </Form>
    </div>
  );
}
