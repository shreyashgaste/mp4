import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";

const UpdateNewspaper = () => {
  const [newspapername, setNewspapername] = useState("");
  const [rate, setRate] = useState("");
  const [lot, setLot] = useState("");
  
  return (
    <div>
      <NavbarComp/>
      <Card className="cardcontainer">
        <Card.Header as="h5" className="text-center p-5">
          <strong><h1>UPDATE NEWSPAPER</h1></strong>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User ID"
                onChange={(event) => {
                    setNewspapername(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                onChange={(event) => {
                    setRate(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lot</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                onChange={(event) => {
                    setLot(event.target.value);
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

export default UpdateNewspaper;
