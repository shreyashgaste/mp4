import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";
function AllNewspaper() {
    const navigate = useNavigate();
  const nps = [
    {
      id: 0,
      name: "Sakal",
      pt: "Daily",
    },
    {
      id: 1,
      name: "Lokmat",
      pt: "Daily",
    },
    {
      id: 2,
      name: "Pudhari",
      pt: "Daily",
    },
    {
      id: 3,
      name: "Times of India",
      pt: "Daily",
    },
    {
      id: 4,
      name: "Maharashtra Times",
      pt: "Daily",
    },
    {
      id: 5,
      name: "Loksatta",
      pt: "Daily",
    },
  ];
  return (
    <>
    <NavbarComp/>
      <Button
        variant="primary"
        size="lg"
        className="btn signupbtn mt-2"
        type="submit"
        onClick={()=>navigate('/add-newspaper')}
      >
        Add Newspaper
      </Button>
      <div className="row">
        {nps.map((np) => (
          <div
            key={np.id}
            style={styles.newscardontainer}
            className="col-lg-4 col-md-6"
          >
            <Card>
              <Card.Header as="h5" className="text-center p-5">
                <strong>
                  <h1>{np.name}</h1>
                </strong>
                <div>Publication Type: {np.pt}</div>
              </Card.Header>
              <Card.Body>
                <span>
                  <Button
                    variant="success"
                    size="lg"
                    className="btn signupbtn mt-2"
                    type="submit"
                    onClick={()=>navigate('/update-newspaper')}
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    size="lg"
                    className="btn signupbtn mt-2"
                    type="submit"
                  >
                    Delete
                  </Button>
                </span>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllNewspaper;

const styles = {
  //   maincontainer: {
  //     flex: 1,
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  newscardontainer: {
    paddingTop: "3%",
    paddingBottom: "3%",
    paddingLeft: "2%",
    paddingRight: "2%",
  },
};
