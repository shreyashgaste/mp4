import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";
const UpdateVendor = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [contact, setContact] = useState('');
  return (
    <div>
      <NavbarComp/>
      <Card className="cardcontainer">
        <Card.Header as="h5" className="text-center p-5">
          <strong><h1>UPDATE VENDOR</h1></strong>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Vendor username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vendor Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Vendor Name"
                onChange={(event) => {
                    setName(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password Again"
                onChange={(event) => {
                    setCPassword(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Contact No"
                onChange={(event) => {
                    setContact(event.target.value);
                }}
              />
              </Form.Group>
            <Button
              variant="success"
              size="lg"
              className="btn"
              type="submit"
            //   onClick={login}
            >
              UPDATE
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UpdateVendor;
