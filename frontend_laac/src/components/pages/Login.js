import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

export default function Login() {
  return (
    <div className="container">
      <Form className="formulario_login">
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
          Entrar
        </Button>
      </Form>
    </div>
  );
}
