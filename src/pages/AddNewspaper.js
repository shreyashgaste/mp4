import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";

const AddNewspaper = () => {
  const [newspapername, setNewspapername] = useState("");
  const [publicationName, setPublicationName] = useState("");
  const [specialrate, setSpecialRate] = useState(0);
  const [lot, setLot] = useState("");
  const publicationType = ["Daily", "Weekly", "Monthly", "Yearly"];
  const [pType, setPType] = useState("");
  const [mondayRate, setMondayRate] = useState(0);
  const [tuesdayRate, setTuesdayRate] = useState(0);
  const [wednesdayRate, setWednesdayRate] = useState(0);
  const [thursdayRate, setThursdayRate] = useState(0);
  const [fridayRate, setFridayRate] = useState(0);
  const [saturdayRate, setSaturdayRate] = useState(0);
  const [sundayRate, setSundayRate] = useState(0);

  return (
    <div>
      <NavbarComp/>
      <Card className="cardcontainer">
        <Card.Header as="h5" className="text-center p-5">
          <strong>
            <h1>ADD NEWSPAPER</h1>
          </strong>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Newspaper Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Newspaper Name"
                onChange={(event) => {
                  setNewspapername(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Publication Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Newspaper Name"
                onChange={(event) => {
                  setPublicationName(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Publication Type</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setPType(e.target.value);
                }}
              >
                <option>---Select Publication Type---</option>
                {publicationType.map((pt) => (
                  <option key={pt} value={pt}>
                    {pt}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              {pType !== "" && pType === "Daily" ? (
                <table>
                  <tr style={{justifyContent: "space-between"}}>
                    <td style={{width: "50%"}}>Monday Price</td>
                    <td>
                      <Form.Control
                        type="text"
                        placeholder="Enter Monday Price"
                        onChange={(event) => {
                          setMondayRate(event.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tuesday Price</td>
                    <td>
                      <Form.Control
                        type="text"
                        placeholder="Enter Tuesday Price"
                        onChange={(event) => {
                          setTuesdayRate(event.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Wednesday Price</td>
                    <td>
                      <Form.Control
                        type="text"
                        placeholder="Enter Wednesday Price"
                        onChange={(event) => {
                          setWednesdayRate(event.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Thursday Price</td>
                    <td>
                      <Form.Control
                        type="text"
                        placeholder="Enter Thursday Price"
                        onChange={(event) => {
                          setThursdayRate(event.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Friday Price</td>
                    <td>
                      <Form.Control
                        type="text"
                        placeholder="Enter Friday Price"
                        onChange={(event) => {
                          setFridayRate(event.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Saturday Price</td>
                    <td>
                      <Form.Control
                        type="text"
                        placeholder="Enter Saturday Price"
                        onChange={(event) => {
                          setSaturdayRate(event.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Sunday Price</td>
                    <td>
                      <Form.Control
                        type="text"
                        placeholder="Enter Sunday Price"
                        onChange={(event) => {
                          setSundayRate(event.target.value);
                        }}
                      />
                    </td>
                  </tr>
                </table>
              ) : (
                <Form.Control
                  type="text"
                  placeholder="Enter Price"
                  onChange={(event) => {
                    setSpecialRate(event.target.value);
                  }}
                />
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lot</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Password"
                onChange={(event) => {
                  setLot(event.target.value);
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              size="lg"
              className="btn"
              type="submit"
              //   onClick={login}
            >
              ADD
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddNewspaper;
