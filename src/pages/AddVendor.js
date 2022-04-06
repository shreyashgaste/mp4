import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import NavbarComp from "../components/NavbarComp";
const AddVendor = () => {
  const [country, setCountry] = useState([]);
  const [countryId, setCountryId] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [allStates, setAllStates] = useState([]);
  const [st, setSt] = useState([]);
  const [ct, setCt] = useState([]);
  useEffect(() => {
    setCountry(Country.getAllCountries());
    setAllStates(State.getAllStates());
  }, []);

  const handleCountry = (e) => {
    const getCountryId = e.target.value;
    setCountryId(getCountryId);
  };

  useEffect(() => {
    setSt(
      allStates.filter((currState) => {
        return currState.countryCode === countryId;
      })
    );
  }, [countryId]);
  const handleState = async (e) => {
    const getStateCode = e.target.value;
    setStateCode(getStateCode);
    console.log(countryId,"hi");
    console.log(stateCode, "heu");
const cities = City.getCitiesOfCountry(countryId);
    // const cities = City.getCitiesOfState(countryId, stateCode);
    setCt(cities);
    console.log(cities);
  };
  // useEffect(() => {
    // const cities = City.getAllCities();
    // setCt(
    //   cities.filter((city) => {
    //     return city.stateCode === stateCode && city.countryCode === countryId;
    //   })
    // );
  //   console.log(cities);

  //   setCt(cities);
  // }, [stateCode]);
  const handleCity = (e) => {};
  const [firmname, setFirmname] = useState("");
  const [name, setName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [contact, setContact] = useState("");
  return (
    <div>
      <NavbarComp/>
      <Card className="cardcontainer">
        <Card.Header as="h5" className="text-center p-5">
          <strong>
            <h1>ADD VENDOR</h1>
          </strong>
        </Card.Header>
        <Card.Body>
          <Form>
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
              <Form.Label>Vendor Firm Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={(event) => {
                  setFirmname(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Street Name/ Landmark"
                onChange={(event) => {
                  setAddressLine1(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Building No/ Name"
                onChange={(event) => {
                  setAddressLine2(event.target.value);
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
              <Form.Label>Country</Form.Label>
              <Form.Select
                placeholder="Country"
                onChange={(e) => handleCountry(e)}
              >
                <option>---Select Country---</option>
                {country.map((countryget, idx) => (
                  <option key={idx} value={countryget.isoCode}>
                    {countryget.name}
                  </option>
                ))}
              </Form.Select>
              {/* <Form.Control
                type="text"
                placeholder="Enter Contact No"
                onChange={(event) => {
                    setContact(event.target.value);
                }}
              /> */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Select placeholder="State" onChange={(e) => handleState(e)}>
              <option>---Select State---</option>
                {st.map((stget, idx) => (
                  <option key={idx} value={stget.isoCode}>
                    {stget.name}
                  </option>
                ))}
              </Form.Select>
              {/* <Form.Control
                type="text"
                placeholder="Enter Contact No"
                onChange={(event) => {
                    setContact(event.target.value);
                }}
              /> */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Select placeholder="City" onChange={(e) => handleCity(e)}>
              <option>---Select City---</option>
                {ct.map((ctget, idx) => (
                  <option key={idx} value={ctget.name}>
                    {ctget.name}
                  </option>
                ))}
              </Form.Select>
              {/* <Form.Control
                type="text"
                placeholder="Enter Contact No"
                onChange={(event) => {
                    setContact(event.target.value);
                }}
              /> */}
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

export default AddVendor;
